import React from 'react';
import { Link, useRouteError } from 'react-router';

const ErrorPage = () => {
    const error=useRouteError()
    return (
        <div>
            <div className='py-24 text-center'>
        <h1 className='mb-8 text-7xl font-thin text-gray-900'>
          {error?.status || 404}
        </h1>
        <p className='mb-3 text-xl font-bold text-gray-900 md:text-2xl'>
          {error?.error?.message || 'Something Went Wrong!'}
        </p>

       <Link to='/'>
       <button className='btn bg-gray-400' label='go to home'>Go To Home</button>
       </Link>

      </div>
        </div>
    );
};

export default ErrorPage;





// app.get('/users',async(req,res)=>{
//   const result=await usersCollection.find().toArray();
//   res.send(result);
// })


// app.post('/users',async(req,res)=>{
//   const userprofile=req.body;
//   console.log(userprofile)
//   const result=await usersCollection.insertOne(userprofile);
//   res.send(result);
// })

// app.delete('/users/:id',async(req,res)=>{
//   const id=req.params.id;
//   const query={_id: new ObjectId(id)}
//   const result=await usersCollection.deleteOne(query);
//   res.send(result);
// })
