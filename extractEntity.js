/**
 * Stores the last of the given entitytype in the flow storage
 * @title Extract Entity
 * @category Entity
 * @author Me
 * @param {string} name - The name of the variable
 * @param {string} entityName - The name of the entity to extract
 * @param {string} [output] - The state variable to output to
 */
const extractEntity = async (entityName, name, output) => {

    //console.log("Searching for entity "+entityName)
    if(event.nlu !== undefined) {
        event.nlu.entities.forEach(async function (item, index, array) {
            console.log("Looping")
            if (item.name === entityName) {
                console.log("Found entity " + entityName)
                const value = item.data.value

                if (output) {
                    temp[output] = value;
                }

            }
        })
    }
   // console.log("finished loop")
};
return extractEntity(args.entityName, args.name, args.output);