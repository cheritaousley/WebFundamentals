var users = {
    'Students': [
        { first_name: 'Michael', last_name: 'Jordan' },
        { first_name: 'John', last_name: 'Rosales' },
        { first_name: 'Mark', last_name: 'Guillen' },
        { first_name: 'KB', last_name: 'Tonel' }
    ],
    'Instructors': [
        { first_name: 'Michael', last_name: 'Choi' },
        { first_name: 'Martin', last_name: 'Puryear' }
    ]
}
function studentsAndInstructors(arr) {
    for (var i = 1; i < arr.length; i++) {
        if(typeof users ==='students'){
            console.log(arr[i], arr[i].first_name, arr[i].last_name);
        }
        else if(typeof users === 'Instructors'){
            console.log(arr[i], arr[i].first_name, arr[i].last_name);
        }    
    }
}
studentsAndInstructors(arr);