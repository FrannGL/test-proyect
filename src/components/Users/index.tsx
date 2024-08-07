import styles from "./styles.module.css";
import { revalidateUsers } from "@/actions/actions";

async function getUsers() {
	const endpoint = "https://66b3f0c79f9169621ea171ee.mockapi.io/api/v1/users";
	const response = await fetch(endpoint, {
		next: { tags: ["users"] },
	});
	return response.json();
}

export default async function Users() {
	const users = await getUsers();

	return (
		<section className={styles.section}>
			<div className={styles.container}>
				<form action={revalidateUsers}>
					<button className={styles.btn}>Revalidar Usuarios</button>
				</form>
				{users.map((user: any) => (
					<div key={user.id}>{user.name}</div>
				))}
			</div>
		</section>
	);
}
