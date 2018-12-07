var converterapp = new Vue({
  el: '#converter-app',
  data: {
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
});
