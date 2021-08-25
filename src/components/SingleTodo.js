import React from 'react' 

const SingleTodo = ({singleTodo, changeLoadingAndSingleTodo}) => {

    const handleStateChange = () => {
        changeLoadingAndSingleTodo()
    }

    return (
        <div className="container">
            <h1>{singleTodo.title}</h1>
            <p>ID: {singleTodo.id}</p>
            <p>USER ID: {singleTodo.userId}</p>
            <p>{`Completed: ${singleTodo.completed}`}</p>
            <button onClick={handleStateChange}>Click to go back...</button>
        </div>
    )
}

// "userId": 1,
//   "id": 4,
//   "title": "et porro tempora",
//   "completed": true
export default SingleTodo