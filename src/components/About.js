import React  from 'react'

export default function About(props) {
    // const [myStyle, setmyStyle] = useState({
    //     color: 'black', 
    //     backgroundColor: 'white'
    // })

    let myStyle={
        color:props.mode === 'dark'?'white':'black',
        backgroundColor: props.mode==='dark'?'black':'white'
    }
    //const [btntxt, setbtntext]=useState("enable dark mode")

    // const toggleStyle = ()=>{
    //     if(myStyle.color==='white')
    //     {
    //         setmyStyle({
    //             color:'black',
    //             backgroundColor: 'white'
    //         })
    //         setbtntext("enable light mode")
    //     }
    //     else{
    //         setmyStyle({
    //             color: 'white', 
    //             backgroundColor: 'black'
    //         })
    //         setbtntext("enable dark mode")
    //     }
    // }
  return (
    <div className="container" style={myStyle}>
        <h1 className='my-3'>About Us</h1>
        <div className="accordion" id="accordionExample" >
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingOne">
            <button className="accordion-button" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                Anlyze your text
            </button>
            </h2>
            <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" 
            data-bs-parent="#accordionExample">
            <div className="accordion-body" >
                <strong>This is the first item's accordion body.</strong> 
                It is shown by default, until the collapse plugin adds the appropriate classes that                 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingTwo" >
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                Free to use
            </button>
            </h2>
            <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" 
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the 
                collapse plugin adds the appropriate classes that we use to style each element. 
            </div>
            </div>
        </div>
        <div className="accordion-item">
            <h2 className="accordion-header" id="headingThree">
            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" 
            data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                Accordion Item #3
            </button>
            </h2>
            <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" 
            data-bs-parent="#accordionExample">
            <div className="accordion-body">
                <strong>This is the third item's accordion body.</strong> It is hidden by default, until 
                the collapse plugin adds the appropriate classes that we use to style each element. 
                These classes control the overall appearance, as well as the showing and hiding via CSS transitions. 
                You can modify any of this with custom CSS or overriding our default variables. It's also worth noting 
                that just about any HTML can go within the <code>.accordion-body</code>, though the transition does 
                limit overflow.
            </div>
            </div>
        </div>
        </div>
        {/* <div className="container my-3">
            <button type="button" onClick={toggleStyle} className="btn btn-primary">Enable dark mode</button>
        </div>
         */}
    </div>
  )
}
