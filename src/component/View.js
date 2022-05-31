
function View(){

    return <>
 <div className="testomoil">
     
     <div className="text-center text-white text-capitalize tt ">our Team</div>
         <div id="carouselExampleControls" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src="../img/imgfour.jpg" className="d-block w-100" alt="3..."/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus corporis deleniti, eum numquam optio voluptatem debitis</p>

          </div>
          <div className="carousel-item">
            <img src="../img/imgtwo.jpg" className="d-block w-100" alt="1..."/>
            
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus corporis deleniti, eum numquam optio voluptatem debitis</p>
          </div>
          <div className="carousel-item">
            <img src="../img/imgone.jpg" className="d-block w-100" alt="2..."/>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Minima minus corporis deleniti, eum numquam optio voluptatem debitis</p>


          </div>
        </div>
        <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="prev">
     <span className="carousel-control-prev-icon" aria-hidden="true"></span>
        <span className="visually-hidden">Previous</span>
        </button>
        <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleControls" data-bs-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
</div>
    </>
}
export default View;