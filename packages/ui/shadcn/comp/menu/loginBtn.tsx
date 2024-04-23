export function LoginBtn() {
    const auth = true;
    return (
        <>
            {auth == true ? (
                <div>login</div>
            ) : (
                <div>logout</div>
            )
            }
        </>
    )
}
