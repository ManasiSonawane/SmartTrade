const sampleListings = [
    {
        title: "Turmeric Powder",
        description: "High-quality, organic turmeric powder known for its vibrant color and health benefits.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/1372767803/photo/curcuma-longa-powder-rhizomes-and-tea.jpg?s=612x612&w=is&k=20&c=8oUySD4OvLiF6MdFroWXI2p4sJh2jhv_KF5dRuzbDAk=",
        },
        price: 1500,
        location: "Mumbai, India",
        country: "India",
        unit: "kg",
        enquiry: "Contact us for bulk orders and inquiries.",
        email: "info@spicesupplier.com",
        number: "+91-9876543210"
      },
      {
        title: "Black Pepper",
        description: "Whole black peppercorns with a strong, bold flavor, perfect for culinary use.",
        image: {
          filename: "listingimage",
          url: "https://unsplash.com/photos/a-white-bowl-filled-with-lots-of-black-beans-4cyW9hB_cIE",
        },
        price: 2500,
        location: "Colombo, Sri Lanka",
        country: "Sri Lanka",
        unit: "kg",
        enquiry: "For wholesale inquiries, please get in touch.",
        email: "sales@pepperworld.com",
        number: "+94-773356781"
      },
      {
        title: "Cumin Seeds",
        description: "Aromatic whole cumin seeds, widely used in curries and spice blends.",
        image: {
          filename: "listingimage",
          url: "https://unsplash.com/photos/photo-of-cumin-seeds-1600180758895-6c9ec3bfa27bhttps://unsplash.com/photos/closeup-of-cumin-seed-axXx3sidcG8",
        },
        price: 1800,
        location: "Ahmedabad, India",
        country: "India",
        unit: "kg",
        enquiry: "We offer competitive rates for bulk purchases.",
        email: "contact@cuminex.com",
        number: "+91-9876543211"
      },
      {
        title: "Clove",
        description: "Aromatic dried flower buds used as a spice for their pungent flavor and medicinal properties.",
        image: {
          filename: "listingimage",
          url: "https://plus.unsplash.com/premium_photo-1668446314011-301c7a98b6a9?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        },
        price: 4000,
        location: "Toamasina, Madagascar",
        country: "Madagascar",
        unit: "kg",
        enquiry: "Get in touch for large order requirements.",
        email: "info@cloveworld.com",
        number: "+261-320456789"
      },
      {
        title: "Coriander Seeds",
        description: "Whole coriander seeds with a warm, citrusy flavor, widely used in seasoning and curries.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/1417704066/photo/coriander-seeds.jpg?s=612x612&w=is&k=20&c=j0757s9s8n3jtAH7t0M3yWr-Ki5uJwaQ9Igrp8wGUbk=",
        },
        price: 1200,
        location: "Cairo, Egypt",
        country: "Egypt",
        unit: "kg",
        enquiry: "For price details, contact us via email or phone.",
        email: "contact@spiceseg.com",
        number: "+20-1012345678"
      },

      {
        title: "Basmati Rice",
        description: "Long-grain, aromatic basmati rice, perfect for biryanis and special dishes.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/175586192/photo/basmati-rice.jpg?s=612x612&w=is&k=20&c=g8O0ypJgtCEzoq4U95CzFfF_umP-vA5IYuBBM8-NbCc=",
        },
        price: 2000,
        location: "Punjab, India",
        country: "India",
        unit: "kg",
        enquiry: "Contact us for bulk orders or special requirements.",
        email: "info@basmatirice.com",
        number: "+91-9876543212"
      },
      {
        title: "Jasmine Rice",
        description: "Soft, fragrant rice widely used in Southeast Asian cuisine.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/1322613316/photo/rice-in-wooden-bowl-on-rice-and-rice-ears-background-natural-food-high-in-protein.jpg?s=612x612&w=is&k=20&c=ZcGZWUWjDA9ramCJMMWK78WCgqeq2_n--HTt3r60bv0=",
        },
        price: 2200,
        location: "Bangkok, Thailand",
        country: "Thailand",
        unit: "kg",
        enquiry: "For orders and queries, email us directly.",
        email: "sales@jasmineworld.com",
        number: "+66-891234567"
      },
      {
        title: "Arborio Rice",
        description: "Short-grain rice perfect for creamy risotto dishes.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/1210253208/photo/white-rice-arborio-in-a-wooden-bowl-on-a-napkin-on-a-light-blue-background.jpg?s=612x612&w=is&k=20&c=L5zDF7iPDiLXNgjRIO0oOUx90PLGK6I0FSqfO7YYl0Q=",
        },
        price: 2800,
        location: "Milan, Italy",
        country: "Italy",
        unit: "kg",
        enquiry: "For special pricing, reach out to our team.",
        email: "contact@arboriorice.com",
        number: "+39-3209876543"
      },
      {
        title: "Parboiled Rice",
        description: "Partially boiled rice that retains more nutrients than white rice.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/478968277/photo/parboiled-rice.jpg?s=612x612&w=0&k=20&c=KPWHkWi-yFJdJPT6MHs1X532YJZ2xmsoZLv80oMG_Yg=",
        },
        price: 1800,
        location: "Chennai, India",
        country: "India",
        unit: "kg",
        enquiry: "Contact us for competitive prices and inquiries.",
        email: "info@parboiledricesupplier.com",
        number: "+91-9765432109"
      },
      {
        title: "Sushi Rice",
        description: "Short-grain sticky rice, essential for making authentic sushi rolls.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/1281196664/photo/recipe-for-inari-sushi-a-traditional-japanese-home-cooked-dish.jpg?s=612x612&w=is&k=20&c=EAp0ZKMV4zs30BMXkizIY80nUFhbH_O6FYAMYLqFb5Q=",
        },
        price: 3200,
        location: "Tokyo, Japan",
        country: "Japan",
        unit: "kg",
        enquiry: "For wholesale and bulk orders, contact us.",
        email: "info@sushirice.com",
        number: "+81-9076543210"
      },
   
      {
        title: "Cotton T-Shirt",
        description: "Soft, breathable cotton T-shirt perfect for casual wear.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/1345934516/photo/natural-organic-cotton-t-shirts-and-cotton-plant-flowers-on-white-table-eco-clothes-fashion.jpg?s=612x612&w=is&k=20&c=SUGX7Lo7h-3nXUCbn0BF6jbgSeVVVaCMIfcVjeus5M4=",
        },
        price: 500,
        location: "Tiruppur, India",
        country: "India",
        unit: "piece",
        enquiry: "For bulk orders and custom sizes, please reach out.",
        email: "contact@tshirtindia.com",
        number: "+91-9876543213"
      },
      {
        title: "Denim Jeans",
        description: "Durable, high-quality denim jeans for men and women.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/1032057264/photo/a-rack-of-second-hand-jeans.jpg?s=612x612&w=is&k=20&c=eJLeW1z3KNq-bmJ1gWrTvmXkivuzUAVaOlG8FdGwJ1Q=",
        },
        price: 2000,
        location: "Los Angeles, USA",
        country: "USA",
        unit: "piece",
        enquiry: "Get in touch for special pricing on bulk orders.",
        email: "sales@denimworld.com",
        number: "+1-3234567890"
      },
      {
        title: "Silk Saree",
        description: "Luxurious silk saree with elegant embroidery and rich texture.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/89323827/photo/indian-sarees.jpg?s=612x612&w=is&k=20&c=whKeYRcmvWxdRRgCj2-MxAlLS5bpTOgojM94vkMf5kE=",
        },
        price: 15000,
        location: "Kanchipuram, India",
        country: "India",
        unit: "piece",
        enquiry: "Contact us for customized orders and pricing.",
        email: "info@silkex.com",
        number: "+91-9876543214"
      },
      {
        title: "Woolen Sweater",
        description: "Warm, cozy woolen sweater ideal for winter wear.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/491643542/photo/pile-of-beige-woolen-clothes-on-a-white-background.jpg?s=612x612&w=is&k=20&c=KrjFKhprwBGpkn_YDHwQuNaGnTfp813lxOxnnUeY5EI="
        },
        price: 2500,
        location: "Edinburgh, Scotland",
        country: "Scotland",
        unit: "piece",
        enquiry: "For wholesale inquiries, please contact us.",
        email: "support@woolenscotland.com",
        number: "+44-1312345678"
      },
      {
        title: "Leather Jacket",
        description: "Premium leather jacket with a stylish, modern design.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/1354251572/photo/woman-black-leather-jacket-isolated-on-white-background.jpg?s=1024x1024&w=is&k=20&c=oZz3BmKxbZ5fbZ6QqteTJ4NNoUFP4DvlRaYH0g3ZGRk=",
        },
        price: 10000,
        location: "Milan, Italy",
        country: "Italy",
        unit: "piece",
        enquiry: "Email us for special orders and bulk purchases.",
        email: "sales@leatherfashion.com",
        number: "+39-3201234567"
      },
   
      {
        title: "Smartphone",
        description: "Latest model smartphone with advanced features and high-speed performance.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/1322157897/photo/close-up-of-a-businessman-hand-holding-a-smartphone-white-screen-is-blank-the-background-is.jpg?s=612x612&w=is&k=20&c=lXI6KA8aoH3W_gpmLnq-ad6O_kKs5CziSK060YhlA5I=",
        },
        price: 50000,
        location: "Shenzhen, China",
        country: "China",
        unit: "piece",
        enquiry: "For wholesale inquiries and special discounts, contact us.",
        email: "sales@smartphoneschina.com",
        number: "+86-13987654321"
      },
      {
        title: "Laptop",
        description: "Lightweight, high-performance laptop ideal for work and study.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/1389603578/photo/laptop-blank-screen-on-wood-table-with-blurred-coffee-shop-cafe-interior-background-and.jpg?s=612x612&w=0&k=20&c=bPf3XxUZJZ6HRw7BE75ur1wBMCm_r4QAr-_lajERIyU=",
        },
        price: 70000,
        location: "San Francisco, USA",
        country: "USA",
        unit: "piece",
        enquiry: "Contact us for bulk orders and pricing details.",
        email: "support@laptopusa.com",
        number: "+1-4151234567"
      },
      {
        title: "Smartwatch",
        description: "Sleek smartwatch with fitness tracking and smart notifications.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/1286099942/photo/close-up-of-hand-touching-smartwatch-with-health-app-on-the-screen-gadget-for-fitness-active.jpg?s=612x612&w=0&k=20&c=zX9Fko_T6qppRO8J8BSYu4DovmLjPFKwi_x6l0GzCq0=",
        },
        price: 15000,
        location: "Seoul, South Korea",
        country: "South Korea",
        unit: "piece",
        enquiry: "For orders, please contact us via email.",
        email: "info@smartwatchkr.com",
        number: "+82-1045678901"
      },
      {
        title: "Wireless Earbuds",
        description: "Compact wireless earbuds with crystal-clear sound and long battery life.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/1194814887/photo/apple-airpods-wireless-bluetooth-headphones-and-charging-case.jpg?s=612x612&w=0&k=20&c=SJWyv7d3oBYyJBBpFzLCMWX5_yiT7siVb63O-Ctqv-Q=",
        },
        price: 8000,
        location: "Tokyo, Japan",
        country: "Japan",
        unit: "pair",
        enquiry: "Contact us for bulk orders and special offers.",
        email: "sales@earbudsjapan.com",
        number: "+81-9023456789"
      },
      {
        title: "Smart TV",
        description: "4K Ultra HD smart TV with streaming apps and voice control features.",
        image: {
          filename: "listingimage",
          url: "https://media.istockphoto.com/id/507832501/photo/family-watching-television-in-living-room.jpg?s=612x612&w=0&k=20&c=uL4G7oJmpfh1QXNstw9Ilsh-1ix6lCwCkLbGVNnepCM=",
        },
        price: 60000,
        location: "Seoul, South Korea",
        country: "South Korea",
        unit: "piece",
        enquiry: "For orders and further inquiries, reach out to us.",
        email: "info@smarttvkr.com",
        number: "+82-1045678902"
      },
];
module.exports = { data: sampleListings };