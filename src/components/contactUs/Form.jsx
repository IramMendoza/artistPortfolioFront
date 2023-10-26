import Field from "./Field"
import Button from "./Button"

const Form = () => {
  return (
    <div>
        <Field labelColor="White" label={"Nombre"} inputColor="#FFC30F"/>
        <Field labelColor="White" label={"Email"} inputColor="#FF5733"/>
        <Field labelColor="White" label={"Asunto"} inputColor="#C70039"/>
        <Field labelColor="White" label={"Mensaje"} inputColor="#900C3F"/>

        <div className=" w-full py-3">
            <Button text="Enviar"/>
            <Button text="Suscribirse"/>
        </div>
    </div>
  )
}

export default Form
