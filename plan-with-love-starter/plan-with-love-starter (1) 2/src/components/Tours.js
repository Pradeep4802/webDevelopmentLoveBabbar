function Tours({ tours }) {
  return (
    <div>
      <div>
        <h2> Plan with Love </h2>
      </div>
      <div>
        {tours.map((tour) => {
          return <Card {...tour}></Card>;
        })}
      </div>
    </div>
  );
}

// import Card from './Card'
// function Tours({tours, removeTour}) {
//     return (
//         <div className='container'>
//             <div>
//                 <h2 className='title'> Plan With Love</h2>
//             </div>
//             <div className='cards'>
//                 {
//                     tours.map( (tour) => {
//                         return <Card key={tour.id} {...tour} removeTour={removeTour}></Card>
//                     } )
//                 }
//             </div>
//         </div>
//     );
// }

export default Tours;
