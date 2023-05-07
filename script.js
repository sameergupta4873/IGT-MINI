// Districts based on states
const districtsByState = {
    state1: ["District 1", "District 2", "District 3"],
    state2: ["District 4", "District 5", "District 6"],
    state3: ["District 7", "District 8", "District 9"]
  };
  
  // Function to update districts dropdown based on selected state
  function updateDistricts() {
    const stateSelect = document.getElementById("state");
    const districtSelect = document.getElementById("district");
    const selectedState = stateSelect.value;
  
    // Clear previous options
    districtSelect.innerHTML = '<option value="">Select</option>';
  
    if (selectedState) {
      const districts = districtsByState[selectedState];
      for (let i = 0; i < districts.length; i++) {
        const option = document.createElement("option");
        option.value = districts[i];
        option.text = districts[i];
        districtSelect.appendChild(option);
      }
    }
  }
  
  // Event listener for state select change
  document.getElementById("state").addEventListener("change", updateDistricts);
  
  // Event listener for form submission
  document.getElementById("survey-form").addEventListener("submit", function(e) {
    e.preventDefault();
    validateForm();
  });
  
  // Function to validate form data
  function validateForm() {
    const name = document.getElementById("name").value;
    const age = document.getElementById("age").value;
    const gender = document.getElementById("gender").value;
    const dob = document.getElementById("dob").value;
    const pincode = document.getElementById("pincode").value;
    const state = document.getElementById("state").value;
    const district = document.getElementById("district").value;
  
    // Perform your validation logic here
    // ...
  
    // If validation passes, submit the form
    document.getElementById("survey-form").submit();
  }
  