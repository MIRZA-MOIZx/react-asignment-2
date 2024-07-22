import React from 'react'

export default function About() {
    return (
        <main className='py-5 align-items-center'>
            <div className="container">
                <div className="row">
                    <div className="col">
                        <h1 className='text-center'>USERS</h1>
                        <table className='text-center ' border={3} width={400} >
                        <thead>
                                    <tr>
                                        <th>ID</th>
                                        <th>Name</th>
                                        <th>Country</th>
                                        {/* <th>Description</th> */}
                                        {/* <th>Category</th> */}
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                      <td>284738</td>
                                      <td>Aslam</td>
                                      <td>Pakistan</td>
                                    </tr>

                                    <tr>
                                       <td>476374</td>
                                       <td>Jon</td>
                                       <td>USA</td>
                                    </tr>

                                    <tr>
                                       <td>47d374</td>
                                       <td>ali</td>
                                       <td>India</td>
                                    </tr>

                                    <tr>
                                       <td>343334</td>
                                       <td>Usman</td>
                                       <td>Iran</td>
                                    </tr>

                                    
                                





                                
                        
                                
                                
                                    <tr>
                                     <td>
                                        <button className='btn btn-sm btn-info me-1 m'>Edit</button>
                                        </td>
                                        <td>
                                        <button className='btn btn-sm btn-danger'>Delete</button>
                                    </td>
                                        </tr>
                                        
                                
                                
                                
                        
                        </tbody>






                        </table>
                    </div>
                </div>
            </div>
        </main>
    )
}
