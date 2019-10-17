let Utils = {
    parseReqUrl: () => {
        let url = location.hash.slice(1).toLowerCase() || '/';
        let r = url.split("/");
        let request = {
            resource: null, 
            id: null,
            verb: null
        }

        request.resource = r[1];
        request.id = r[2];
        request.verb = r[3];

        return request;
    }, 
    getApiJson: async (apiUrl) => {
        const options = {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json'
            }
        };

        try {
            const response = await fetch(apiUrl, options);
            const json = await response.json();

            return json;

        } catch(err) {
            console.log("Error getting items.", err);
        }
    }
};

export default Utils;