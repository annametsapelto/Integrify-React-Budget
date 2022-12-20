import React from 'react';
import Select from 'react-select';

const FormTemplate = ({values}: string[], formName: string, setFunction: React.FC) => {
    const options = {values}
    return(
        <div>
            <form> 
                <label htmlFor ="sum">{formName}</label>
                <input type="number" id="sum" name="sum"></input>

            </form>
        </div>
    )
}

export default FormTemplate;