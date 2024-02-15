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
			allContactsAgenda : [],
			allAgendas : {},
			currentUser: {}
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
			assignUser: (item) => setStore({currentUser : item}),

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


			},
			addContact  : async (newContact) => {
				const url = "https://playground.4geeks.com/apis/fake/contact/"
				const slug_agenda = "PauFargasAgenda"
				const options = {
					method : 'POST',
					headers: {"Content-Type" : "application/json"},
					body: JSON.stringify(newContact),
				};

				const response = await fetch (url, options);

				if (response.ok){
					alert("Contacto añadido satisfactoriamente"); 
					console.log("Contacto añadido satisfactoriamente");
					getActions().getAllContactsAgenda()
											
				} else{
					console.log("Error: ", response.status, response.statusText)
				}
			},
			deleteContact : async (contactID) =>{
				const url = `https://playground.4geeks.com/apis/fake/contact/${contactID}`;
				const slug_agenda = "PauFargasAgenda";
				const options = {
					method : 'DELETE',
					headers: {"Content-Type": "application/json"}
				};
				const response = await fetch (url, options);
				if (response.ok){
					alert('Contacto eliminado correctamente')
					console.log("Contacto eliminado correctamente")
					getActions().getAllContactsAgenda();
				}else{
					console.log("Error: ", response.status, response.statusText);
				}
			},
			getAllAgendas : async () =>{
				const url = "https://playground.4geeks.com/apis/fake/contact/agenda";
				const options = {
					method: 'GET'
				}
				const response = await fetch (url, options);
				if (response.ok){
					const data = await response.json();
					console.log(data)
					setStore({"allAgendas" : data})
				}else{
					console.log("Error getting agendas: ", response.status, response.statusText);
				}
			},
			updateContacts: async (dataToSend, id) => {
				const options = {
					method: "PUT",
					body: JSON.stringify(dataToSend),
					headers: {
						"Content-type": "application/json"
					}
				}

				const response = await fetch('https://playground.4geeks.com/apis/fake/contact/' + id, options);
				if (!response.ok) return
				const data = await response.json();
				getActions().getAllContactsAgenda();
			},
		}
	};
};

export default getState;
