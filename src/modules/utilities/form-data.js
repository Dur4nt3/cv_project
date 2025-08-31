export class PersonalInfo {
    constructor(
        fullName,
        phoneNumber,
        location,
        email,
        linkedInProfile,
        position
    ) {
        this.fullName = fullName;
        this.phoneNumber = phoneNumber;
        this.location = location;
        this.email = email;
        this.linkedInProfile = linkedInProfile;
        this.position = position;
    }
}

export class ExperienceItem {
    constructor(
        position,
        companyName,
        companyLocation,
        positionStartDate,
        positionEndDate,
        positionDescription
    ) {
        this.position = position;
        this.companyName = companyName;
        this.companyLocation = companyLocation;
        this.positionStartDate = positionStartDate;
        this.positionEndDate = positionEndDate;
        this.positionDescription = positionDescription;
    }
}

export class ProjectItem {
    constructor(name, link, description) {
        this.name = name;
        this.link = link;
        this.description = description;
    }
}

export class EducationItem {
    constructor(institution, label, gradDate, description) {
        this.institution = institution;
        this.label = label;
        this.gradDate = gradDate;
        this.description = description;
    }
}

export class SkillItem {
    constructor(type, description) {
        this.type = type;
        this.description = description;
    }
}
