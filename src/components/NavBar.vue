


<template>
<div>
<nav class="navbar">
    <div class="nav-wrapper purple teal darken-4">
      <ul id="nav-mobile" class="left hide-on-med-and-down">

        <li><router-link to="/">Τρύπιες Σκέψεις</router-link></li>
      <li>       <a href="#" class="brand-logo"><img id ='lpl' src="../assets/tripio.png" alt="" ></a>
   </li>
</ul>
      
      <ul id="nav-mobile" class="right hide-on-med-and-down">
        <li><router-link to="/">Αρχική Σελίδα</router-link></li>
        <li><router-link to="/about">Πως Λειτουργεί</router-link></li>
        <li><router-link to="/contact">ΝΙΩΘΕΙΣ ΤΡΥΠΙ@ ;</router-link></li>
      </ul>
    </div>
  </nav>
        

  <router-view/>
  </div>
</template>        

<style>


#lpl {
  width: 13%;
  height: auto;
}
 nav{
    overflow:hidden;
    position: fixed;
    top: 0px;
} 
ul{
  margin-top: 0%;
}
/* nav-logo{
  width: 10px; /* Adjust the width to your desired size */

  /* margin-right: 10px; /* Optional margin for spacing*/ 

</style>