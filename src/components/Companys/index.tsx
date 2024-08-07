import styles from "./styles.module.css";
import { revalidateCompanys } from "@/actions/actions";

async function getCompanys() {
	const endpoint = "https://66b3f0c79f9169621ea171ee.mockapi.io/api/v1/pets";
	const response = await fetch(endpoint, {
		next: { tags: ["companys"] },
	});
	return response.json();
}

export default async function Companys() {
	const companys = await getCompanys();

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<form action={revalidateCompanys}>
					<button className={styles.btn}>Revalidar companias</button>
				</form>
				{companys.map((company: any) => (
					<div key={company.id}>{company.name}</div>
				))}
			</div>
		</section>
	);
}
