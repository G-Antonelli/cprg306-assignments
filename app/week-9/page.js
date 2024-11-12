'use client';
import { useUserAuth } from "./_utils/auth-context";
import Link from "next/link";

export default function Page() {
    const { user, gitHubSignIn, firebaseSignOut } = useUserAuth();

    const handleSignIn = async () => {
        try {
            await gitHubSignIn();
        } catch (error) {
            console.error("Error signing in with GitHub:", error);
        }
    };

    const handleSignOut = async () => {
        try {
            await firebaseSignOut();
        } catch (error) {
            console.error("Error signing out:", error);
        }
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-center p-4">
            <div className="w-full max-w-md text-center">
                <h1 className="text-2xl font-bold mb-2">
                    Shopping List App
                </h1>
                <p className="mb-8 text-gray-600">
                    Keep track of your shopping items
                </p>

                {user ? (
                    <div className="space-y-4">
                        <p>
                            Welcome, {user.displayName} ({user.email})
                        </p>
                        <div className="mb-4">
                            <Link 
                                href="/week-9/shopping-list" 
                                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                            >
                                Go to Shopping List
                            </Link>
                        </div>
                        <button 
                            onClick={handleSignOut}
                            className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
                        >
                            Sign Out
                        </button>
                    </div>
                ) : (
                    <div>
                        <p className="mb-4">Please sign in to continue</p>
                        <button 
                            onClick={handleSignIn}
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
                        >
                            Sign in with GitHub
                        </button>
                    </div>
                )}
            </div>
        </main>
    );
}