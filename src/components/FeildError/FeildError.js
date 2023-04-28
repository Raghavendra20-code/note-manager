import s from './style.module.css'
const FeildError = ({msg})=>{
    return <div className={s.container}>{msg}</div>
}

export default FeildError;