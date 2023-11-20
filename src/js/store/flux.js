const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			demo: [
				{
					title: "FIRST",
					background: "white",
					initial: "white"
				},
				{
					title: "SECOND",
					background: "white",
					initial: "white"
				}
			],
			cohorte: "Console Log this. It's located in the Flux.js, inside the object store - cohorte",
			allContactsAgenda : []
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
				*/
			},
			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			},

			getAllContactsAgenda: async () =>{
				const url = "https://playground.4geeks.com/apis/fake/contact/agenda/PauFargasAgenda";
				const options = {
					method: 'GET'
				};
				const response = await fetch (url, options);

				if (response.ok){
					const data = await response.json()
					setStore({"allContactsAgenda" : data})
					console.log(data)
							//Hacemos algo
							
				} else {
							// Tratamiento del error
							console.log("Error: ", response.text, response.statusText)
				}


			}
		}
	};
};

export default getState;
