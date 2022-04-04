import React from "react";
import { Button } from '@mui/material';

function ReservationCard({reservation}){

    function handleRemove(reservation){
            fetch(`/reservations/${reservation.id}`, {
              method: 'DELETE'
            })
            //.then(r => {resetDomRemove(restaurant)})
          }

    return(
        <>
        <div>
            {console.log(reservation)}
            <b>{reservation.restaurant.name}</b>
            <br></br>
            {reservation.restaurant.address}
            <br></br>
            {reservation.reservation_date}
            <br></br>
            <Button onClick = {() => handleRemove(reservation)} variant = "contained" size = "medium">Remove reservation at {reservation.restaurant.name}</Button>
            <br></br>
            <br></br>
        </div>
        </>
    )
}

export default ReservationCard;


    // const [reservationData, setReservationData] = useState([])

//     useEffect(() => {
//         combineArrays();
//     },[restaurantName, reservationDate])

//     function combineArrays(){
//         // console.log(restaurantName)
//         // console.log(reservationDate)
//         const combinedArray = []
//             for(var i = 0; i < restaurantName.length ; i++){
//                 combinedArray.push(`${restaurantName[i]} ${reservationDate[i]}.`);
//                 setReservationData(combinedArray);
//                 console.log(reservationData)
//             }
// }