import Field from "./Field"
import Button from "./Button"

const Form = () => {
  return (
    <div>
        <Field labelColor="Black" label={"Nombre"} inputColor="#d41813"/>
        <Field labelColor="Black" label={"Apllido"} inputColor="#e1440f"/>
        <Field labelColor="Black" label={"Email"} inputColor="#e2ac10"/>
        <Field labelColor="Black" label={"Asunto"} inputColor="#19d022"/>
        <Field labelColor="Black" label={"Mensaje"} inputColor="#111e64"/>

        <div className=" w-full py-3">
            <Button text="Enviar"/>
            <Button text="Suscribirse"/>
        </div>
    </div>
  )
}

export default Form
