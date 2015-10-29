function friendTemplate(data) {
  return `

    <ul class="friend">

      
      <li class="photo"><p class="back-button" data-to>
        <i class='fa fa-arrow-left'></i>
      </p>${data.Photo}</li>
      <li><i class='fa fa-user'></i>  ${data.Name}</li>
      <li><i class='fa fa-envelope'></i>  ${data.Email}</li>
      <li><i class='fa fa-phone-square'></i>  ${data.Phone}</li>
      <li><i class='fa fa-globe'></i>  ${data.Location}</li>
    </ul>

  `;
}

export default friendTemplate;