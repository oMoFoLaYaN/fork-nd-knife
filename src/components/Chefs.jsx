import { chefs } from "../constants";
import { layout } from "../style";

const Chefs = () => {
  const a = "transition-[color] duration-[0.3s] text-white inline-block mx-2.5 my-0 hover:text-fola-700"
  const i = "text-lg mx-0.5 my-0"
  return (
    <section id="chefs" className="chefs">
      <div className={layout.container}>
        <div className="pb-10">
          <h2 className={layout.sectionTitle}>Chefs</h2>
          <p className={layout.sectionSubtitle}>Our culinary wizards</p>
        </div>
        <div className={layout.row}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {chefs.map((chef, index) => (
              <div key={index} className=" member group text-center relative overflow-hidden mb-5 rounded-xl">
                <img src={chef.img} className="h-auto max-w-full rounded-xl" alt="" />
                <div className="member-info group-hover:opacity-100 chef-gradient opacity-0 absolute transition-[0.2s] inset-0">
                  <div className="member-info-content group-hover:duration-[0.4s] group-hover:bottom-[60px] absolute transition-[bottom] duration-[0.4s] bottom-2.5 inset-x-0">
                    <h4 className="font-bold text-lg text-white mb-0.5 capitalize">{chef.name}</h4>
                    <span className="italic block text-[13px] text-white capitalize">{chef.role}</span>
                  </div>
                  <div className="social group-hover:ease-in-out duration-500 group-hover:delay-75 group-hover:bottom-0 absolute bottom-[-38px] h-12 ease-in-out text-center inset-x-0">
                    <a href={chef.twitter} className={a}><i className={`bi bi-twitter ${i}`}></i></a>
                    <a href={chef.facebook} className={a}><i className={`bi bi-facebook ${i}`}></i></a>
                    <a href={chef.instagram} className={a}><i className={`bi bi-instagram ${i}`}></i></a>
                    <a href={chef.linkedin} className={a}><i className={`bi bi-linkedin ${i}`}></i></a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};


export default Chefs