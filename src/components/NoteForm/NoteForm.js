import ButtonPrimary from "../ButtonPrimary/ButtonPrimary";
import {PencilFill,TrashFill} from "react-bootstrap-icons";
import s from './style.module.css';
import {useState} from "react";
import {ValidatorService} from "../../services/validator";
import FeildError from "../FeildError/FeildError";

const Validator = {
    title:(value)=>{
        return ValidatorService.min(value,3) || ValidatorService.max(value,20)
    },
    content:(value)=>{
        return ValidatorService.max(value,20)
    }
}

const NoteForm= ({
                     isEditable = true,
                     note,
                     title,
                     onClickEdit,
                     onClickDelete,
                     onSubmit,
                 }) =>{
    const [formValues, setFormValues] = useState({ title: note?.title?note.title:"", content: note?.content? note.content:"" });
    const [formErrors,setFormErrors] = useState({
        title:note?.title ? undefined:true,
        content:note?.title ? undefined:true
    })

    const updateFormValues = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormValues({ ...formValues, [name]: value });
        validate(name,value);
    };

    const validate = (feildName,feildValue) =>{
        setFormErrors({...formErrors,
            [feildName]:Validator[feildName](feildValue)})
    }

    const hasError = () =>{
        for (const feildName in formErrors){
            if(formErrors[feildName]){
                return true
            }
        }
        return false;
    }
    const actionIcons = (
        <>
            <div className="col-1">
                {onClickEdit && <PencilFill  onClick={onClickEdit} className={s.icon} />}
            </div>
            <div className="col-1">
                {onClickDelete &&  <TrashFill onClick={onClickDelete} className={s.icon} />}
            </div>
        </>
    );
    const titleInput = (
        <div className={`mb-5`}>
            <label className="form-label">Title</label>
            <input onChange={updateFormValues}
                   type="text"
                   name="title"
                   className="form-control"
                   value={formValues.title}
            />
            <FeildError msg = {formErrors.title}/>
        </div>
    );
    const contentInput = (
        <div className={`mb-5`}>
            <label className="form-label">Content</label>
            <textarea onChange={updateFormValues}
                      type="text"
                      name="content"
                      className="form-control"
                      row="5"
                      value={formValues.content}
            />
            <FeildError msg={formErrors.content}/>
        </div>
    );

    const submitBtn = (
        <div className={s.submit_btn}>
            <ButtonPrimary isDisabled ={hasError()} onClick = {() => onSubmit(formValues)}>Submit</ButtonPrimary>
        </div>
    );
    return(
        <div className={s.container}>
            <div className="row justify-content-space-between">
                <div className="col-10">
                    <h2 className="mb-3">{title}</h2>
                </div>
                {actionIcons}
            </div>
            <div className={`mb-3 ${s.title_input_container}`}>{isEditable && titleInput}</div>
            <div className="mb-3">{isEditable ? contentInput : <pre>{note.content}</pre>}</div>
            {onSubmit && submitBtn}
        </div>
    )
}

export default NoteForm;


//In jsx <pre></prep> tag is used for to show break between the lines in a notes like below:
/*
Hello
Raghav
Here

before Pre tag it was showing like:
Hello Raghav Here even if we create the note in above style.
 */