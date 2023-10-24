import Header from "../components/Header"
import Registration from "../components/Registration"

export default function RegistrationPage() {
    return (
        <div className="h-screen items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-md w-full mx-auto space-y-8">
            <Header
                heading="Register your church"
                paragraph="Already registered?"
                linkName="Login"
                linkUrl="/login"
            />
            <Registration />
            </div>
        </div>
    )
}

