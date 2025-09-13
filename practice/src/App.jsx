import ProductCard from "./ProductCard.jsx";
import './App.css'
import UserAvatar from './UserAvatar.jsx';

function App() {

  const productName1 = "BlackBox"
  const productName2 = "WhiteBox"
  const price = 1000
  const isAvailable = true

  const img = "public/img1.png"
  const Name = "Peddada Jasmika Satya Sri"
  const Course = "B.Tech (CSE)"
  const RollNo = "23VV1A0544"
  const BloodGroup = "O+"
  const DOB = "02-08-2006"

  return (
    <div className="container">
      <ProductCard product={productName1} price={price} isAvailable={isAvailable} />
      <ProductCard product={productName2} price={price + 500} isAvailable={!isAvailable} />
      <UserAvatar img={img} Name={Name} Course={Course} RollNo={RollNo} BloodGroup={BloodGroup} DOB={DOB} />
    </div>
  )
}

// function User() {
//   const Name = "Jasmika"
//   const RollNo = "23VV1A0544"
//   const BloodGroup = "O+"
//   const DOB = "02-08-2006"

//   return(
//     <div className="container1">
//       <UserAvatar Name={Name} RollNo={RollNo} BloodGroup={BloodGroup} DOB={DOB}/>
//     </div>
//   )
// }

export default App