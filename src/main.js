// La siguiente aplicación carga unos colores en base a una petición que se hace a un API Rest. Se hizo con VueJS
var vue_det = new Vue({
   el: '#principal', // Nombre de la aplicación para definir el nodo principal
   vuetify: new Vuetify(), // Se inicializan Vuetify que sirve para usar controles con material design
   data: {
      currentWindow: "home",
      drawer: false,
      group: null,
      title: 'Registro de empleados', // Título de la página en la parte de arriba
      info: {
         data : []
      },
      selectedColor: {},
      cardView: true,
      page: 1, // Página donde se encuentra el usuario la cual cambia con los botones de navegación para saber qué enviar en el API Rest que obtiene los colores
      activeBtn: 0, // Se inicializa el botón anterior      
      getData(){
         // Petición para obtener los colores
         axios
            .get('https://reqres.in/api/colors?page=' + this.page)
            .then(response => (this.info = response));
      }
   },
   methods: {
      reloadData(page) {
         // Carga los colores según la página
         this.page = page + 1;
         this.activeBtn = page;
         this.getData();
      },
      employeesList() {
         this.currentWindow = 'employeesList';
      },
   },
   mounted() {
      // Método al inicializar la página web
      this.getData();
   }
});