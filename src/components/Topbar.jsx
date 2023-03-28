import { tops } from "../constants";
import { layout } from "../style";

const Topbar = () => {
  return (
    <div id="topbar" className="flex items-center fixed z-50 top-0 inset-x-0 h-10 text-sm transition-all duration-500">
  <div className={`${layout.container} flex justify-center md:justify-start`} >
    {tops.map((top) => (
    <div key={top.id} className="flex items-center mx-2">
      <i className={`${top.icon} flex items-center mx-2 text-amber-400`}/>
        <span className="text-white">{top.name}</span>
    </div>
  ))}
  </div>
</div>

  )
  }

export default Topbar