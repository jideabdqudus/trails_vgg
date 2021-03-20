import Builder from '../../appHelpers/Builder'

export const Questions = ({form}) => {
    return (
        <>
            {form?.components?.map((content, id) => (
                    Builder({content, id})
            ))}
        </>
    )
}
 