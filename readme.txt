_________________________ Neo4j Installation on Windows__________________________ 
1. download neo4j executable from http://neo4j.com/download/other-releases/ , choose appropriate file.

2. run the executable on windows and follow the instruction.
                     or for more details checkout : http://www.tutorialspoint.com/neo4j/neo4j_exe_environment_setup.htm

3. Neo4j will be installed and hosted at localhost:7474 or http://127.0.0.1:7474/browser/ open in the browser

4. Open the installed neo4j program a window appears click start to start the neo4j server.

5. when running neo4j for the first time you will be propmted to reset the password.
                
                 Default    Username: neo4j
                            Password: neo4j

6. Neo4j interactive GUI opens at: http://localhost:7474/browser (works fastest on chrome)
 __________________________________________________________________________________
 
 _________________________ Adding the required data to database____________________
 
 1. Run neo4j server and open localhost:7474 / your url in the browser.
 
 2. there are two files(person.csv and rel.csv) present in the js/resources directory.
 
 3. Load these csv file to neo4j server using the follwing queries
 

        Note: ====>if the location of csv file is different use the appropriate path
                
        person.csv :
                                
                LOAD CSV WITH HEADERS FROM "http://localhost/forceDirectedGraph/convertcsv.csv" AS csvLine
                CREATE (p:Person { group: toInt(csvLine.group), name: csvLine.name });
                
                
        rel.csv :
                                
                LOAD CSV WITH HEADERS FROM "http://localhost/forceDirectedGraph/convertcsv.csv" AS csvLine
                CREATE (p:Person { source: toInt(csvLine.source), target: toInt(csvLine.target), value: toInt(csvLine.value) });
______________________________________________________________________________________

 
 /***********************************************************************************
 *                                 Project Setup                                    *                   
 ************************************************************************************
 1. Open Git Bash/git Cmd/Bash
 
 2. clone the project from https://github.com/maninder123/Neo4jGraph.git 
                        
                         type command: git clone https://github.com/maninder123/Neo4jGraph.git
                          
 3. Navigate to the project directory the navigate to js/src/config.js. This file contains config details.
 
 4. Supply the necessary details :
        1.PORT -> port on which neo4j is listening (default: 7474)
        2.HOST-> hostname
        3.uname-> not required
        4.password->not required
        4.credentials->explained in the next point
        
5. Generating the base64 credentials 
        1. go to google chrome console and type :btoa('<your-neo4j-username>:<your-neo4j-password>');
                     example :btoa('neo4j:root')
                     
        2. it will return a sting copy and paste it as credentials value.
        
 6. Once everything is setup, run the project like any other project(example: localhost/forceDirectedGraph)
 __________________________________________________________________________________________