<script>
import cottageData from "../assets/data/cottages.json";
import PlaceContainer from "../components/PlaceContainer.vue";
import $ from 'jquery';

export default {
  components: {
    PlaceContainer
  },
  data() {
    return {
      cottages: cottageData
    };
  },
  mounted() {
    // Call floatedLabel when the component is mounted
    this.$nextTick(() => {
      this.initFloatLabel();
    });
  },
  methods: {
    initFloatLabel() {
      // Iterate over each form control and apply floated label effect
      const formControls = this.$el.querySelectorAll('.form-control');
      formControls.forEach(input => {
        this.floatedLabel(input);
        input.addEventListener('input', () => {
          this.floatedLabel(input);
        });
      });
    },
    floatedLabel(input) {
      // Access the input element's parent form group
      const field = input.closest('.form-group');
      if (input.value) {
        field.classList.add('input-not-empty');
      } else {
        field.classList.remove('input-not-empty');
      }
    }
  }
};




</script>

<link href="https://fonts.googleapis.com/css?family=Montserrat:400,700" rel="stylesheet"></link>



<template>
  <div class="content">
    <div class="container flex-col">
      <h2 class="custom-text">Cottages</h2>
      <div class="container flex-row" v-for="(cottage, index) in cottages" :key="index">
        <PlaceContainer :place="cottage" />
      </div>
    </div>
    <div class="container flex-col">

    </div>
  </div>

  <div id="booking" class="section">
		<div class="section-center">
			<div class="container">
				<div class="row">
					<div class="booking-form">
						<div class="form-header">
							<h1>Book Your Cottage</h1>
						</div>
						<form>
							
							<div class="form-group">
								<input class="form-control" type="text">
								<span class="form-label">Full Name</span>
							</div>
							<div class="form-group">
								<input class="form-control" type="text">
								<span class="form-label">Email</span>
							</div>
							<div class="row">
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="date">
										<span class="form-label">Check In</span>
									</div>
								</div>
								<div class="col-md-6">
									<div class="form-group">
										<input class="form-control" type="date">
										<span class="form-label">Check Out</span>
									</div>
								</div>
							</div>
							<div class="row">
								<div class="col-md-4">
									<div class="form-group">
                    <h5>Cottage</h5>
										<select class="form-control">
											<option>Cottage 1</option>
											<option>Cottage 2</option>
											<option>Cottage 3</option>
										</select>
										<span class="select-arrow"></span>
								
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
                    <h5>Adults</h5>
										<select class="form-control">
											<option>1</option>
											<option>2</option>
											<option>3</option>
										</select>
										<span class="select-arrow"></span>
										
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
                    <h5>Children</h5>
										<select class="form-control">
											<option>0</option>
											<option>1</option>
											<option>2</option>
										</select>
										<span class="select-arrow"></span>
								
									</div>
								</div>
							</div>
							<div class="form-btn">
								<button class="submit-btn">Book</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</div>
	</div>

</template>

<style scoped>
.custom-text {
  color: #eed25a;
  font-family: 'Fink Heavy';
  font-size: 6rem;
  text-shadow:
    1px 0px 0px #674d2b,
    -1px 0px 0px #674d2b,
    1px 1px 0px #674d2b,
    0px -1px 0px #674d2b,
    1px 2px 0px #674d2b,
    1px 3px 0px #674d2b,
    1px 4px 0px #674d2b,
    1px 5px 0px #674d2b,
    1px 6px 0px #674d2b,
    1px 7px 0px #674d2b,
    1px 8px 0px #674d2b,
    1px 9px 0px #674d2b,
    1px 10px 0px #674d2b;
}
.content {
  display: flex;
  flex-direction: column;
  gap: 88px;
  padding: 80px 0;
}

.container {
  width: 80%;
  margin: auto;
  justify-content: center;
  align-items: center;
  align-content: center;
}

.flex-col {
  display: flex;
  flex-direction: column;
  gap: 88px;
}

.flex-row {
  display: flex;
  flex-direction: row;
  gap: 56px;
}

a {
  width: max-content;
  height: max-content;
  padding: 8px 24px;
  background-color: #fffbE7;
  border-radius: 100px;
  box-shadow: 0px 4px #63563b;
  color: #ffffff;
  background-color: #907c57;
  font-family: 'Seurat';
  font-size: 1.3rem;
  letter-spacing: .5px;
  text-decoration: none;
  transition: .25s;
  cursor: pointer;
}

a:hover {
  transform: translateY(4px);
  box-shadow: none;
}
</style>