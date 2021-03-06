$(function(){
	$("#btn-contactForm").on("click", function(){
		$validation = validateForm();
		if($validation == true)
		{
			$.ajax(
			{	
				url: "models/saveContact.php",
				method: "POST",	
				data: 
				{
					strName: $("#name").val(),
					strEmail: $("#email").val(),
					nPhone: $("#phone").val(),
					strMessage: $("#message").val()
				},				
				success: function(result)
				{
					$('#contactForm').append('<p class="msg ok">Thank you! We will contact you soon.</p>');
					$('#contactForm')[0].reset();
				},
				error: function(a, b, error)
				{
					console.log(error);
				}
			});
		}
		return false;
	});

	$("#submitForm").on("click", function(){
		$validation = validateForm();
		if($validation == true)
		{
			$.ajax(
			{	
				url: "models/checkLogin.php",
				method: "POST",	
				data: 
				{
					strEmail: $("#cms-email").val(),
					strPassword: $("#cms-pass").val()
				},				
				success: function(result)
				{
					if(result == true)
					{
						window.location = "index.php?controller=admin&action=dashboard";
					} else {
						window.location = "index.php?controller=admin&action=login&error=true";
						console.log(result);
					}
				},
				error: function(result)
				{
					$("#login").append("<div class='msg errors'>You are not allowed to access this area.</div>");
				}
			});
		}
	return false;
	});

	$("#loginForm").on("click", function(){
		$validation = validateForm();
		if($validation == true)
		{
			$.ajax(
			{	
				url: "models/checkSiteLogin.php",
				method: "POST",	
				data: 
				{
					strEmail: $("#email").val(),
					strPassword: $("#password").val()
				},				
				success: (result) =>
				{
					if(result == true)
					{
						window.location = "index.php?controller=pages&action=profile";
					} else {
						$(".loginForm").append("<div class='msg errors'>Sorry, we couldn't find your account</div>");
					}
				},
				error: (a, b, error) =>
				{
					console.log(error);
				}
			});
		}
	return false;
	});

	$("#btn-bookForm").on("click", function(){
		$validation = validateForm();
		if($validation == true)
		{
			$.ajax(
			{	
				url: "models/submitBooking.php",
				method: "POST",	
				data: 
				{
					strWish: $("#formWish").val(),
					nUserID: $("#user").val()
				},				
				success: function(result)
				{
					$('#thankyou').css('display', 'block');
				},
				error: function(a, b, error)
				{
					console.log(error);
				}
			});
		}
		return false;
	});

	$("#btn-clientSiteForm").on("click", function(){
		$validation = validateForm();
		if($validation == true)
		{
			$.ajax(
			{	
				url: "models/saveUser.php",
				method: "POST",	
				data: 
				{
					strEmail: $("#email").val(),
					strPassword: $("#password").val(),
					strFirstName: $("#firstName").val(),
					strLastName: $("#lastName").val(),
					nPhone: $("#phone").val(),
					nProvinceID: $("#province").val(),
					strCity: $("#city").val()
				},				
				success: (result) =>
				{
					window.location = "index.php?controller=pages&action=login";
				},
				error: (a, b, error) =>
				{
					console.log(error);
				}
			});
		}
	return false;
	});

	$("#btn-updateClientSiteForm").on("click", function(){
		$validation = validateForm();
		if($validation == true)
		{
			$.ajax(
			{	
				url: "models/updateUser.php",
				method: "POST",	
				data: 
				{
					strEmail: $("#email").val(),
					strPassword: $("#password").val(),
					strPastPassword: $("#pastpassword").val(),
					strFirstName: $("#firstName").val(),
					strLastName: $("#lastName").val(),
					nPhone: $("#phone").val(),
					nProvinceID: $("#province").val(),
					strCity: $("#city").val(),
					id: $("#id").val()
				},				
				success: (result) =>
				{
					window.location = "index.php?controller=pages&action=profile";
				},
				error: (a, b, error) =>
				{
					console.log(error);
				}
			});
		}
	return false;
	});
});