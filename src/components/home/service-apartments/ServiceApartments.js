import React from 'react'
import "./ServiceApartments.scss"
import ServiceApartmentsCard from '../../service-apartments-card/ServiceApartmentsCard';

const ServiceApartments = () => {

    const bestProjectCards = new Array(6).fill(null);

  return (
    <section className='service_apartments_sec'>
        <div className="container">
            <div className="row">
                <div className="col-md-12 text-center">
                    <h3>Service Apartments</h3>
                    <p>Studio apartments have a good appreciation potential. Owing to increasing demand for housing, even the limited numbers of studio apartments are attracting investors. Studio apartments yield higher rental returns than even 2/3BHK’s, because of the limited availability. This is mainly because these are fully furnished with more facilities than regular flats Best for Investment point of view. You can consider buying it if your kid has recently joined college in a Metro and is spending a good amount on rent. However, even in that case, once he gets married and has a family, he would need more space eventually. At that stage, again you may want to sell it or at least rent it out.</p>
                </div>
            </div>

            <div className="row mt-3">
                {bestProjectCards.map((_, index) => (
                    <div key={index} className="col-md-3">
                        <ServiceApartmentsCard />
                    </div>
                ))}
            </div>
        </div>      
    </section>
  )
}

export default ServiceApartments
