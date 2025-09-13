import './UserAvatar.css'

function UserAvatar(UserAvatar) {

    const imageStyle = {
        borderRadius: '5%',
        width: '150px',
        height: '150px',
        objectFit: 'cover',
        marginBottom: '10px',
        border: '1px solid black'
    }

    return (
        <div className="user">
            <img style={imageStyle} src='\img1.png'></img>
            <p className="Name">{UserAvatar.Name}</p>
            <p className="course">Course: {UserAvatar.Course}</p>
            <p className="rollno">Roll No: {UserAvatar.RollNo}</p>
            <p className="bg">BloodGroup: {UserAvatar.BloodGroup}</p>
            <p className="dob">DOB: {UserAvatar.DOB}</p>
        </div>
    )
}

export default UserAvatar