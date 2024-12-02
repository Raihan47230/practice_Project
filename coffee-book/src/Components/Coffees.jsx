
import { useLoaderData } from 'react-router-dom';
import Coffee from './Heading/Coffee';
const Coffees = () => {
   const plays=useLoaderData()
   console.log(plays)

     return (
          <div className='grid grid-cols-3 gap-5 container mx-auto'>
               {
                    plays.map(data=><Coffee key={data.id} data={data}></Coffee>)
               }
          </div>
     );
};

export default Coffees;


// category
// : 
// "Brewed Coffee"
// description
// : 
// "A concentrated coffee brewed by forcing hot water through finely-ground coffee beans."
// id
// : 
// 1
// image
// : 
// "https://i.ibb.co.com/6XPk3nf/espresso.webp"
// ingredients
// : 
// (2) ['Coffee Beans', 'Water']
// making_process
// : 
// "Grind coffee beans finely. Pack the grounds into the portafilter and tamp down evenly. Lock the portafilter in the espresso machine and start brewing. Serve immediately in a small cup."
// name
// : 
// "Espresso"
// nutrition_info
// : 
// {calories: 2, fat: 0, carbohydrates: 0, protein: 0}
// origin
// : 
// "Italy"
// popularity
// : 
// 88
// rating
// : 
// 4.5