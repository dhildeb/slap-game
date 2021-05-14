let target = {
  health: 10,
  name: "pedestrian",
  hits: 0,
  img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrBVLG6U5hPCLxOFbIBGia7CuVbje8IJELQ&usqp=CAU',
  weapons: ""
}
let loseLimb = false
// let weapons = {
//   chainsaw: {
//     name: "chainsaw",

//   }
// }

function getItem(item) {
  // let grabbedItem = {}
  //   for(grabbedItem in weapons){

  //   }
  target.weapons = item
  console.log(target)
  update()
}


// function addMods() {
//   let dmgMod = 0
//   for (i = 0; i < target.weapon.length; i++) {
//     dmgMod += target.weapon[i].modifier
//   }
//   return dmgMod
// }

function slap() {
  if (loseLimb == true) {
    template = `
    <img class="img-fluid" src="https://media.sciencephoto.com/f0/06/90/15/f0069015-800px-wm.jpg">not a good idea to slap a man with a chainsaw</img>`

    document.getElementById("controls").innerHTML = template
  } else {
    target.img = "https://media.istockphoto.com/videos/dont-understand-what-youre-saying-video-id1155196586?s=640x640"
    target.health--
    target.hits++
  }
  update()
}
function chuck() {
  if (target.weapons == "kitten") {
    target.img = "https://images.theconversation.com/files/357327/original/file-20200909-16-1w1tjiq.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=237&fit=clip"
    target.health++
    target.weapons = ""
    loseLimb = false
  }
  if (target.weapons == "uglystick") {
    target.img = "https://i.pinimg.com/236x/6f/b7/1a/6fb71adee286e3bd162a2d69f390afb0.jpg"
    target.health--
    target.hits++
    target.weapons = ""
    loseLimb = false
  }
  if (target.weapons == "chainsaw") {
    target.img = "https://static4.depositphotos.com/1011030/276/i/950/depositphotos_2765276-stock-photo-crazy-guy-with-chainsaw.jpg"
    loseLimb = true
    target.weapons = ""
  }
  update()
}
function use() {
  if (target.weapons == "kitten") {
    target.img = "https://images.theconversation.com/files/357327/original/file-20200909-16-1w1tjiq.jpg?ixlib=rb-1.1.0&q=45&auto=format&w=237&fit=clip"
    target.health++
    target.hits--
    loseLimb = false
  }
  if (target.weapons == "uglystick") {
    target.img = "https://i.pinimg.com/236x/6f/b7/1a/6fb71adee286e3bd162a2d69f390afb0.jpg"
    target.health--
    target.hits++
    loseLimb = false
  }
  if (target.weapons == "chainsaw") {
    target.health -= 100
  }
  update()
}

function update() {
  let template = ``

  document.getElementById("hp").innerHTML = `<div class="bg-danger" style="width:${target.health * 10}%; height:24px;"></div>`

  document.getElementById("hits").innerHTML = ` ${target.hits}`

  document.getElementById("name").innerHTML = ` ${target.name}`

  document.getElementById("weapon").innerHTML = ` ${target.weapons}`

  if (target.health < 1) {
    target.img = 'https://res.cloudinary.com/jerrick/image/upload/v1500745845/mpnw7xekjbdqawa7vcpe.jpg'
    document.getElementById("name").innerHTML = "KO"
    if (target.weapons == "chainsaw") {
      document.getElementById("jail").innerHTML = `<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQegGEkQ9BaXG8qxEVKc5WF6Bu4NI-zrRZgYrwdWhge934ydYna-dJZ3OHeWCgJb9HUxBw&usqp=CAU" alt="" style="width:1200px;height:800px">taking your chainsaw you react a horror movie, of course the cops show up and put your massacre to an end</img>`
      return
    }
    console.log(target)
    reset()
  }
  template = `
  <img class="img-fluid" src="${target.img}"></img>`

  document.getElementById("img").innerHTML = template
}

function reset() {
  document.getElementById("reset").classList.remove("d-none")
  document.getElementById("controls").classList.add("d-none")
}
function moreSlap() {
  document.getElementById("reset").classList.add("d-none")
  document.getElementById("controls").classList.remove("d-none")
  target.health = 10
  target.img = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSbrBVLG6U5hPCLxOFbIBGia7CuVbje8IJELQ&usqp=CAU"
  target.name = "guy"
  target.weapon = ""
  target.hits = 0
  update()
}
update()