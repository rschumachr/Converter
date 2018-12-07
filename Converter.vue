<template>
  <div class="converter ui card">
    <header>
      <h1>{{selectedtitle}} Converter</h1>
      <div class="ui buttons">
          <button @click="showType('t')" class="ui button">Temperature</button>
          <button @click="showType('w')" class="ui button">Weight</button>
          <button @click="showType('d')" class="ui button">Distance</button>
      </div>
      <div class="ui section divider"></div>
    </header>
    <main>
<!-- #################### Temperature #################### -->
      <section id="temp" :class="{ hidden: hideTemp }">
        <div class="processor">
          <div class="left">
            <ul>
              <li>
                <div class="ui left labeled input">
                  <div class="ui basic label">Celsius</div>
                  <input size="10" type="text" v-model="celsius" placeholder="Enter Temp.." @keyup.enter="convertTemp()">
                </div>
              </li>
              <li><p class="calculation">Fahrenheit = (Celsius * 9 / 5) + 32 </p></li>
            </ul>
          </div>
          <div class="right">
            <ul>
              <li>
                <div class="ui right labeled input">
                  <input size="10" type="text" v-model="fahrenheit" placeholder="Enter Temp.." @keyup.enter="convertTemp()">
                  <div class="ui basic label">Fahrenheit</div>
                </div>
              </li>
              <li><p class="calculation">Celsius = (Fahrenheit - 32) * 5 / 9</p></li>
            </ul>
          </div>
          <div class="mid">
            <button @click="convertTemp()" class="ui primary button">Convert</button>
          </div>
        </div>
      </section>

<!-- #################### Weight #################### -->
      <section id="weight" :class="{ hidden: hideWeight }">
        <div class="processor">
          <div class="left">
            <ul>
              <li>
                <div class="ui left labeled input">
                  <div class="ui basic label">Kilogram</div>
                  <input size="10" type="text" v-model="kilogram" placeholder="Enter Weight.." @keyup.enter="convertWeight()">
                </div>
              </li>
              <li>
                <div class="ui left labeled input">
                  <div class="ui basic label">Gram</div>
                  <input size="10" type="text" v-model="gram" placeholder="Enter Weight.." @keyup.enter="convertWeight()">
                </div>
              </li>
              <li><p class="calculation">1 Kilogram = 1000 Gram</p></li>
            </ul>
          </div>
          <div class="right">
            <ul>
              <li>
                <div class="ui right labeled input">
                  <input size="10" type="text" v-model="pound" placeholder="Enter Weight.." @keyup.enter="convertWeight()">
                  <div class="ui basic label">Pound</div>
                </div>
              </li>
              <li>
                <div class="ui right labeled input">
                  <input size="10" type="text" v-model="ounce" placeholder="Enter Weight.." @keyup.enter="convertWeight()">
                  <div class="ui basic label">Ounce</div>
                </div>
              </li>
              <li><p class="calculation">1 Pound = 16 Ounces</p></li>
            </ul>
          </div>
          <div class="mid">
            <button @click="convertWeight()" class="ui primary button">Convert</button>
          </div>
        </div>
      </section>

<!-- #################### Distance #################### -->
      <section id="distance" :class="{ hidden: hideDistance }">
        <div class="processor">
          <div class="left">
            <ul>
              <li>
                <div class="ui left labeled input">
                  <div class="ui basic label">Kilometer</div>
                  <input size="10" type="text" v-model="kilometer" placeholder="Enter Distance.." @keyup.enter="convertDistance()">
                </div>
              </li>
              <li>
                <div class="ui left labeled input">
                  <div class="ui basic label">Meter</div>
                  <input size="10" type="text" v-model="meter" placeholder="Enter Distance.." @keyup.enter="convertDistance()">
                </div>
              </li>
              <li>
                <div class="ui left labeled input">
                  <div class="ui basic label">Centimeter</div>
                  <input size="10" type="text" v-model="centimeter" placeholder="Enter Distance.." @keyup.enter="convertDistance()">
                </div>
              </li>
              <li>
                <div class="ui left labeled input">
                  <div class="ui basic label">Millimeter</div>
                  <input size="10" type="text" v-model="millimeter" placeholder="Enter Distance.." @keyup.enter="convertDistance()">
                </div>
              </li>
              <li><p class="calculation">1km = 1000m | 1m = 100cm | 1cm = 10mm</p></li>
            </ul>
          </div>
          <div class="right">
            <ul>
              <li>
                <div class="ui right labeled input">
                  <input size="10" type="text" v-model="mile" placeholder="Enter Distance.." @keyup.enter="convertDistance()">
                  <div class="ui basic label">Mile</div>
                </div>
              </li>
              <li>
                <div class="ui right labeled input">
                  <input size="10" type="text" v-model="yard" placeholder="Enter Distance.." @keyup.enter="convertDistance()">
                  <div class="ui basic label">Yard</div>
                </div>
              </li>
              <li>
                <div class="ui right labeled input">
                  <input size="10" type="text" v-model="foot" placeholder="Enter Distance.." @keyup.enter="convertDistance()">
                  <div class="ui basic label">Foot</div>
                </div>
              </li>
              <li>
                <div class="ui right labeled input">
                  <input size="10" type="text" v-model="inch" placeholder="Enter Distance.." @keyup.enter="convertDistance()">
                  <div class="ui basic label">Inch</div>
                </div>
              </li>
              <li><p class="calculation">1m = 1760y | 1y = 3f | 1f = 12in</p></li>
            </ul>
          </div>
          <div class="mid">
            <button @click="convertDistance()" class="ui primary button convertbtn">Convert</button>
          </div>
        </div>
      </section>

      <button @click="reset()" class="ui negative button">Reset</button>
    </main>
    <footer>
      <div class="ui section divider"></div>
      <p id="copyright">2018 &copy; rschumachr</p>
    </footer>
  </div>
</template>

<!-- #################### JavaScript #################### -->
<script>
export default {
  name: 'Converter',
  data() {
    return {
      hideTemp: false,
      hideWeight: true,
      hideDistance: true,
      celsius: '',
      fahrenheit: '',
      kilogram: '',
      gram: '',
      pound: '',
      ounce: '',
      kilometer: '',
      meter: '',
      centimeter: '',
      millimeter: '',
      mile: '',
      yard: '',
      foot: '',
      inch: '',
      selectedtitle: 'Temperature'
    }
  },
  methods: {
    showType(type) {
      this.hideTemp = true;
      this.hideWeight = true;
      this.hideDistance = true;
      switch(type) {
        case 't':
          this.hideTemp = false;
          this.selectedtitle = 'Temperature';
          break;
        case 'w':
          this.hideWeight = false;
          this.selectedtitle = 'Weight';
          break;
        case 'd':
          this.hideDistance = false;
          this.selectedtitle = 'Distance';
          break;
      }
    },
    convertTemp() {
      if(this.celsius != ''){
        this.fahrenheit = ( this.celsius * 1.8 ) + 32;
      } else if(this.fahrenheit != ''){
        this.celsius = ( this.fahrenheit - 32 ) / 1.8;
      }
      this.fahrenheit = Math.round(this.fahrenheit * 100) / 100;
      this.celsius = Math.round(this.celsius * 100) / 100;
    },
    convertWeight() {
      if(this.kilogram != ''){
        this.pound = this.kilogram * 2.205;
        this.ounce = this.kilogram * 35.274;
      } else if(this.pound != ''){
        this.kilogram = this.pound / 2.205;
        this.gram = this.kilogram * 1000;
      } else if(this.gram != ''){
        this.pound = ( this.gram / 1000 ) * 2.205;
        this.ounce = this.gram / 28.35;
      } else if(this.ounce != ''){
        this.kilogram = this.ounce / 35.274;
        this.gram = this.ounce * 28.35;
      }
      this.pound = Math.round(this.pound * 100) / 100;
      this.ounce = Math.round(this.ounce * 100) / 100;
      this.kilogram = Math.round(this.kilogram * 100) / 100;
      this.gram = Math.round(this.gram * 100) / 100;
    },
    convertDistance() {
      if(this.kilometer != ''){
        this.mile = this.kilometer / 1.609;
        this.yard = this.kilometer * 1093.613;
        this.foot = this.kilometer * 3280.84;
        this.inch = this.kilometer * 39370.079;
      } else if(this.mile != ''){
        this.kilometer = this.mile * 1.609;
        this.meter = this.mile * 1609.344;
        this.centimeter = this.mile * 160934.4;
        this.millimeter = this.mile * 1609344;
      } else if(this.meter != ''){
        this.mile = this.meter / 1609.344;
        this.yard = this.meter * 1.094;
        this.foot = this.meter * 3.281;
        this.inch = this.meter * 39.37;
      } else if(this.yard != ''){
        this.kilometer = this.yard / 1093.613;
        this.meter = this.yard / 1.094;
        this.centimeter = this.yard * 91.44;
        this.millimeter = this.yard * 914.4;
      } else if(this.centimeter != ''){
        this.mile = this.centimeter / 160934.4;
        this.yard = this.centimeter / 91.44;
        this.foot = this.centimeter / 30.48;
        this.inch = this.centimeter / 2.54;
      } else if(this.foot != ''){
        this.kilometer = this.foot / 3280.84;
        this.meter = this.foot / 3.281;
        this.centimeter = this.foot * 30.48;
        this.millimeter = this.foot * 304.8;
      } else if(this.millimeter != ''){
        this.mile = this.millimeter / 1609344;
        this.yard = this.millimeter / 914.4;
        this.foot = this.millimeter / 304.8;
        this.inch = this.millimeter / 25.4;
      } else if(this.inch != ''){
        this.kilometer = this.inch / 39370.079;
        this.meter = this.inch / 39.37;
        this.centimeter = this.inch * 2.54;
        this.millimeter = this.inch * 25.4;
      }
      this.kilometer = Math.round(this.kilometer * 100) / 100;
      this.meter = Math.round(this.meter * 100) / 100;
      this.centimeter = Math.round(this.centimeter * 100) / 100;
      this.millimeter = Math.round(this.millimeter * 100) / 100;
      this.mile = Math.round(this.mile * 100) / 100;
      this.yard = Math.round(this.yard * 100) / 100;
      this.foot = Math.round(this.foot * 100) / 100;
      this.inch = Math.round(this.inch * 100) / 100;
    },
    reset() {
      this.celsius = '';
      this.fahrenheit = '';
      this.kilogram = '';
      this.pound = '';
      this.gram = '';
      this.ounce = '';
      this.kilometer = '';
      this.mile = '';
      this.meter = '';
      this.yard = '';
      this.foot = '';
      this.centimeter = '';
      this.millimeter = '';
      this.inch = '';
    }
  }
}
</script>

<!-- #################### CSS #################### -->
<style scoped>
  .converter {
    width: 50vw;
    margin: 0 auto;
    background-color: white;
    padding: 25px;
    overflow: hidden;
  }

  h1 {
    user-select: none;
  }

  .buttons .button {
    background-color: white;
  }

  .buttons .button:focus {
    background-color: white;
  }

  .divider {
    margin-top: 10px !important;
    margin-bottom: 10px !important;
  }

  .hidden {
    display: none;
  }

  .processor {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 25px;
  }

  .left {
    grid-row: 1;
    position: relative;
    width: 100%;
  }

  .right {
    grid-row: 1;
    position: relative;
    width: 100%;
  }

  .mid {
    grid-row: 2;
    grid-column: 1 / 3;
    margin-top: 5px;
    margin-bottom: 5px;
  }

  ul {
    list-style-type: none;
    margin: 0;
    padding: 0;
  }

  li {
    padding-bottom: 5px;
  }

  .calculation {
    font-size: 75%;
    user-select: none;
  }

  #copyright {
    padding-top: 15px;
    padding-bottom: 0px;
    margin-bottom: 0px;
    user-select: none;
  }


  /* large Monitor ----------- */
  @media only screen and (min-width : 1924px) {
    .converter {
      width: 40vw;
    }
  }

  /* Small Monitor ----------- */
  @media only screen and (max-width : 1200px) {
    .converter {
      width: 70vw;
    }
  }

  /* Tablet ----------- */
  @media only screen and (max-width : 991px) {
    .converter {
      width: 80vw;
    }
  }

  /* Smartphones (portrait) ----------- */
  @media only screen and (max-width : 768px) {
    .converter {
      width: 90vw;
    }
    .buttons .button {
      padding-left: 5px;
      padding-right: 5px;
    }
    .processor {
      grid-template-columns: 1fr;
      grid-column-gap: 0px;
    }
    .left {
      grid-row: 1;
    }
    .right {
      grid-row: 3;
    }
    .mid {
      grid-row: 2;
      margin-top: 15px;
      margin-bottom: 20px;
    }
    .negative {
      margin-top: 15px;
      margin-bottom: 10px;
    }
  }

</style>
