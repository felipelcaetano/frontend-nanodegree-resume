var data = "%data%";
// DADOS PESSOAIS
var bio = {
    name: "Felipe Caetano",
    role: "Desenvolvedor",
//
    contactInfo: {
        mobile: "(11) 99799-1091",
        email: "felipe.l.caetano@gmail.com",
        github: "felipelcaetano",
        location: "São Paulo"
    },
//
    welcomeMessage: "Será um prazer trabalarmos juntos!!",
    skills: ["Java", "HTML", "CSS", "JavaScript", "JQuery"],
    biopic: "images/perfil.jpg",
//
    display: function() {
        var formattedRole = HTMLheaderRole.replace(data, bio.role);
        $("#header").prepend(formattedRole);
//
        var formattedName = HTMLheaderName.replace(data, bio.name);
        $("#header").prepend(formattedName);
//
//      CONTACTS
        var formattedMobile = HTMLmobile.replace(data,
            bio.contactInfo.mobile);
        $("#topContacts").append(formattedMobile);
        $("#footerContacts").append(formattedMobile);
//
        var formattedEmail = HTMLemail.replace(data,
            bio.contactInfo.email);
        $("#topContacts").append(formattedEmail);
        $("#footerContacts").append(formattedEmail);
//
        var formattedGitHub = HTMLgithub.replace(data,
            bio.contactInfo.github);
        $("#topContacts").append(formattedGitHub);
        $("#footerContacts").append(formattedGitHub);
//
        var formattedContactLocation = HTMLlocation.replace(data,
            bio.contactInfo.location);
        $("#topContacts").append(formattedContactLocation);
        $("#footerContacts").append(formattedContactLocation);
//
//      FOTO
        var formattedBioPic = HTMLbioPic.replace(data, bio.biopic);
        $("#header").append(formattedBioPic);
//
//
//      MENSAGEM
        var formattedWelcomeMessage = HTMLwelcomeMsg.replace(data,
            bio.welcomeMessage);
        $("#header").append(formattedWelcomeMessage);
//
//      SKILLS
        if (bio.skills.length > 0) {
//
            $("#header").append(HTMLskillsStart);
//
            bio.skills.forEach(function(skill) {
                var formattedSkill = HTMLskills.replace(data, skill);
                $("#skills-h3").append(formattedSkill);
            });
        }
    }
};
//
bio.display();
//
//
// CURSOS E FACULDADES
var education = {
    schools: [
        {
            name: "FIAP",
            location: "São Paulo",
            degree: "MBA em Engenharia de Software",
            majors: ["Engenharia de Software", "Administração", "Empreendedorismo"],
            dates: "2014-2015",
            url: "https://www.fiap.com.br"
        },
        {
            name: "Uni SantAnna",
            location: "Dublin",
            degree: "Tecnologo em Redes de Computadores",
            majors: ["Redes de Computadores"],
            dates: "2006-2008",
            url: "https://www.unisantanna.br"
        }
    ],
    onlineCourses: [
        {
            title: "Prep. Certificação Java",
            school: "Alura",
            dates: "2017-2017",
            url: "https://www.alura.com.br",
            urlCourse: "https://www.alura.com.br/curso-online-certificacao-java-" +
            "lambdas-api-de-datas"
        },
        {
            title: "Prep. Certificalção Linux",
            school: "Alura",
            dates: "2017-2017",
            url: "https://www.alura.com.br",
            urlCourse: "https://www.alura.com.br/curso-online-java8-lambdas"
        },
        {
            title: "Java 8",
            school: "Alura",
            dates: "2017-2017",
            url: "https://www.alura.com.br",
            urlCourse: "https://www.alura.com.br/curso-online-linux-essentials-1"
        }
    ],
//
    display: function(){
        if (education.schools.length > 0 || education.onlineCourses.length > 0) {
            $("#education").append(HTMLschoolStart);
        }
//
        if (education.schools.length > 0) {
//
            education.schools.forEach(function(school) {
                var formattedSchoolName = HTMLschoolName.replace(data,
                    school.name);
                var formattedSchoolName = formattedSchoolName.replace("#",
                    school.url);
//
                var formattedDegree = HTMLschoolDegree.replace(data,
                    school.degree);
//
                var formattedNameDegree = formattedSchoolName + formattedDegree;
//
                var formattedDates = HTMLschoolDates.replace(data,
                    school.dates);
//
                var formattedLocation = HTMLschoolLocation.replace(data,
                    school.location);
//
                var formattedMajor = HTMLschoolMajor.replace(data,
                    school.majors);
//
                $(".education-entry:last").append(formattedNameDegree);
                $(".education-entry:last").append(formattedDates);
                $(".education-entry:last").append(formattedLocation);
                $(".education-entry:last").append(formattedMajor);
            });
        }
//
        if (education.onlineCourses.length > 0) {
//
            $(".education-entry:last").append(HTMLonlineClasses);
//
            education.onlineCourses.forEach(function(course) {
                var formattedCourseTitle = HTMLonlineTitle.replace(data,
                    course.title);
                var formattedCourseTitle = formattedCourseTitle.replace("#",
                    course.urlCourse);
//
                var formattedSchool = HTMLonlineSchool.replace(data,
                    course.school);
//
                var formattedTitleSchool = formattedCourseTitle + formattedSchool;
//
                var formattedDates = HTMLonlineDates.replace(data,
                    course.dates);
//
                var formattedURL = HTMLonlineURL.replace(data,
                    course.url);
                var formattedURL = formattedURL.replace("#", course.url);
//
                $(".education-entry:last").append(formattedTitleSchool);
                $(".education-entry:last").append(formattedDates);
                $(".education-entry:last").append(formattedURL);
            });
        }
    }
};
//
education.display();
//
// TRABALHOS
var work = {
    jobs: [
        {
            employer: "Itaú",
            title: "Analista de Sistemas",
            dates: "2010-2017",
            location: "São Paulo",
            description: "Particiapação em todo processo em projetos de software",
            url: "https://www.itau.com.br"
        },
        {
            employer: "Capgemini",
            title: "Analista de Sistemas",
            dates: "2009-2010",
            location: "Barueri",
            description: "Particiapação em todo processo em projetos de software",
            url: "https://www.capgemini.com/br-pt"
        }
    ],
//
    display: function(){
//
        work.jobs.forEach(function(job) {
//
            $("#workExperience").append(HTMLworkStart);
//
            var formattedEmployer = HTMLworkEmployer.replace(data,
                job.employer);
            var formattedEmployer = formattedEmployer.replace("#",
                job.url);
//
            var formattedTitle = HTMLworkTitle.replace(data,
                job.title);
//
            var formattedEmployerTitle = formattedEmployer + formattedTitle;
//
            $(".work-entry:last").append(formattedEmployerTitle);
//
            var formattedDates = HTMLworkDates.replace(data,
                job.dates);
//
            $(".work-entry:last").append(formattedDates);
//
            var formattedLocation = HTMLworkLocation.replace(data,
                job.location);
//
            $(".work-entry:last").append(formattedLocation);
//
            var formattedDescription = HTMLworkDescription.replace(data,
                job.description);
//
            $(".work-entry:last").append(formattedDescription);
        });
    }
};
//
work.display();
//
// PROJETOS
var projects = {
    projects: [
        {
            title: "Portifolio",
            dates: "2017-2017",
            description: "Projeto de criação de portifólio",
            image: "images/projeto2.jpg"
        },
        {
            title: "Currículo",
            dates: "2017-2017",
            description: "Projeto de criação de currículo online",
            image: "images/projeto1.jpg"
        }
    ],
//
    display: function() {
//
        projects.projects.forEach(function(proj) {
            $("#projects").append(HTMLprojectStart);
//
            formattedProjectTitle = HTMLprojectTitle.replace(data,
            proj.title);
//
            formattedProjectDates = HTMLprojectDates.replace(data,
            proj.dates);
//
            formattedProjectDescription = HTMLprojectDescription.replace(data,
            proj.description);
//
            formattedProjectImage = HTMLprojectImage.replace(data,
            proj.image);
//
            $(".project-entry:last").append(formattedProjectTitle);
            $(".project-entry:last").append(formattedProjectDates);
            $(".project-entry:last").append(formattedProjectDescription);
            $(".project-entry:last").append(formattedProjectImage);
        });
    }
};
//
projects.display();
//
//
/*
$(document).click(function(loc) {
    var x = loc.pageX;
    var y = loc.pageY;
    logClicks(x, y);
});
//
$("#main").append(internationalizeButton);
//
function inName(name){
    name = name.trim().split(" ");
    console.log(name);
//
    name[1] = name[1].toUpperCase();
    name[0] = name[0].slice(0,1).toUpperCase() + name[0].slice(1).toLowerCase();
//
    return name[0] + " " + name[1];
}
*/
//
//Adicionando mapa
$("#mapDiv").append(googleMap);
//