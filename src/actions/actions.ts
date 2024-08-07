"use server"

import { revalidatePath, revalidateTag } from "next/cache"
import { redirect } from "next/navigation"

export async function revalidateUsers() {
	revalidateTag("users")
}

export async function revalidateCompanys() {
	revalidateTag("/companys")
}

export async function revalidateAll() {
	revalidatePath("/")
	redirect("/")
}