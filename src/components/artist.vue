<template>
    <div>
        <a :href="artista.url" target="_blank" rel="noopener noreferrer">
            {{artista.name}} <br>
            <img :src="artista.image[2]['#text']" alt="" class="mx-auto img-fluid">
        </a>
    </div>
</template>

<script>
export default {
    name: 'artist',
    props: ['artista']
}
</script>


<style lang="scss" scoped>
    div{
        a {
            color: #3eb982;
            font-size: 1.3rem;
            -moz-transition: all ease .2s;
            -o-transition: all ease .2s;
            -ms-transition: all ease .2s;
            transition: all ease .2s;
            -webkit-transition: all ease .2s;
            &:hover{
                text-decoration: none;
                zoom: .95;
            }
        }
    }    
</style>
