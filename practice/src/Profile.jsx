function Profile(){
    const name= "Jasmika";
    const age=19;
    const isStudent=true;
    return (
        <>
        <p>This is profile</p>
        <p>Name : {name}</p>
        <p>age : {age}
        </p>
        <p>{isStudent===true?"Yes":"No"}</p>
        </>
    )
}
export default Profile;