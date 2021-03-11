import Builder from '../../appHelpers/Builder'

export const Questions = ({form}) => {
    return (
        <>
            {form?.components?.map((content, id) => (
                <div key={id}>
                    {Builder({content, id})}
                </div>
            ))}
        </>
    )
}
