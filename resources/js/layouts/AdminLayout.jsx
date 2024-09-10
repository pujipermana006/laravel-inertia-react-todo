import { InertiaLink } from '@inertiajs/inertia-react';
import { Link, usePage } from '@inertiajs/react';
import React from "react"
const AdminLayout = ({ children }) => {

    const { component } = usePage()
    console.log(component);
    return (
        <>
            <header className="bg-black text-white py-8">
                <div className="container mx-auto">
                    <div className="flex items-center justify-between">
                        <h2 className="font-bold text-2xl">Todo</h2>
                        <nav className="flex justify-between items-center grow ml-32">
                            <div className="flex gap-6 justify-start">
                                <Link
                                    href="/dashboard"
                                    className={`${component == "Dashboard" ? "font-semibold text-indigo-500" : ""}`}                                >
                                    Dashboard</Link>
                                <Link
                                    href="todo"
                                    className={`${component == 'Todo' ? "font-semibold text-indigo-500" : ""}`}>

                                    Todo</Link>
                            </div>
                            <div>
                                User
                            </div>
                        </nav>
                    </div>
                </div>
            </header>

            <main className="mt-10">

                <div className="container mx-auto">{children}</div>

            </main>
        </>
    )
}
export default AdminLayout