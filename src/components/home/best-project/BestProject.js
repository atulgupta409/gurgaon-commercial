import React from 'react'
import "./BestProject.scss"
import BestProjectCard from '../../best-project-card/BestProjectCard';

const BestProject = () => {

    const bestProjectCards = new Array(6).fill(null);

  return (
    <section className='best_project_sec'>
      <div className="container">
        <div className="row">
            <div className="col-md-12">
                <div className="best_project_content text-center">
                    <h3><span>Assured Return</span> Projects in Gurgaon</h3>
                    <p>Assured Return Property are best for Investments in Gurgaon from a reputed developer with a proven track record. Assured Return project of a Good developer will offers you a Assured Return on your investment ranging from 9% to 11% till possession. So you get almost 30% to 40% of your invested money back by the time the building is ready and Capital appreciation as well. Most reputed builders offer First Lease guarantee and Lease assistance. A standard company lease is of for 9 years with increase in rent after every three years. The most important factor before choosing any Assured Return property is the profile of the developer, featured here are some of the top projects in Gurgaon for Assured Returns by prominent developers.</p>
                </div>
            </div>
        </div>

        <div className="row mt-3 mb-4">
            {bestProjectCards.map((_, index) => (
                <div key={index} className="col-md-4">
                    <BestProjectCard />
                </div>
            ))}
        </div>
      </div>
    </section>
  )
}

export default BestProject
