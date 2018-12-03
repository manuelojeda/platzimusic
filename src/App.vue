<template>
  <div id="app">
    <div class="container py-5">
      <div class="row">
        <div class="col-12 text-center">
          <img src="https://manuelojeda.github.io/platzimusic/assets/logo.png" class="mx-auto img-fluid d-block my-4">
          <h1 class="mb-3">Platzi Music</h1>
          <p>Selecciona el país que deseas consultar</p>
          
          <div class="input-group mb-3">
            <div class="input-group-prepend">
              <span class="input-group-text" id="basic-addon1">País</span>
            </div>
            <select v-model="pais" class="form-control" @change="buscarArtista()">
              <option :value="country.value" v-for="(country,index) in countries" :key="index">{{country.name}}</option>
            </select>
          </div>

          <spinner v-show="loading"></spinner>

          <div v-show="!loading">
            <h3>Mostrando los artistas más escuchados de <span>{{countries[indexPais].name}}</span></h3>
            <div class="row align-items-start">
              <div class="col-12 col-sm-6 col-md-4 col-lg-3 my-3" v-for="(artista,index) in artistas" :key="index" >
                <artist :artista="artista"></artist>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>    
  </div>
</template>

<script>
import Artist from './components/artist';
import Spinner from './components/spinner';
export default {
  name: 'app',
  data () {
    return {
      artistas: [],
      indexPais: 0,
      loading: true,
      pais: 'mexico',
      countries: [
        { name: 'Argentina', value: 'argentina' },
        { name: 'Colombia', value: 'colombia' },
        { name: 'España', value: 'spain' },
        { name: 'México', value: 'mexico' }
      ]
    }
  },
  mounted(){
    this.buscarArtista();
  },
  components: {
    Artist,
    Spinner
  },
  methods: {
    buscarArtista(){
      this.loading = true;
      axios.get('https://ws.audioscrobbler.com/2.0/?method=geo.gettopartists&country='+this.pais+'&api_key=ec69222a16e7ab2b86581864c065bd18&format=json')
      .then((response) => {
        this.artistas = response.data.topartists.artist;

        this.countries.forEach((element,key) => {
          if(element.value == this.pais){
            this.indexPais = key;
          }
        });
      })
      .finally(() => {
        this.loading = false;
      })
    }
  }
}
</script>

<style lang="scss" scoped>
  #app {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    color: #fff;
  }

  h1, h2, h3 {
    font-weight: 200;

    span{
      font-weight: 500;
    }
  }

  ul {
    list-style-type: none;
    padding: 0;
  }
</style>