import React from "react";

const CourseDescription = () => {
   
    const courseDescriptionStyle = {
        height: '903px',
        width: '964px',
      };
      
      const overlapStyle = {
        backgroundColor: '#ffffff',
        height: '904px',
        left: '1px',
        position: 'relative',
        top: '4px',
        width: '963px',
      };
      
      const frame2Style = {
        alignItems: 'flex-start',
        display: 'inline-flex',
        flexDirection: 'column',
        gap: '33px',
        height: '861px',
        left: '52px',
        overflowY: 'scroll',
        position: 'relative',
        top: '43px',
      };
      
      const titleStyle = {
        height: '91px',
        position: 'relative',
        width: '612px',
      };
      
      const textWrapper3Style = {
        color: '#1e1e1e',
        fontFamily: 'Inter-Bold, Helvetica',
        fontSize: '40px',
        fontWeight: '700',
        left: '0',
        letterSpacing: '0',
        lineHeight: 'normal',
        position: 'absolute',
        top: '0',
        whiteSpace: 'nowrap',
      };
      
      const textWrapper4Style = {
        color: '#1e1e1e',
        fontFamily: 'Inter-SemiBold, Helvetica',
        fontSize: '32px',
        fontWeight: '600',
        left: '0',
        letterSpacing: '0',
        lineHeight: 'normal',
        position: 'absolute',
        top: '52px',
      };
      
      // ... Repeat the pattern for other styles
      
      // Use these styles within your React components as inline styles
      
      const CourseDescription = () => {
        return (
          <div style={courseDescriptionStyle} className="course-description">
            <div style={overlapStyle} className="overlap">
              <div style={frame2Style} className="frame-2">
                <div style={titleStyle} className="title">
                  <div style={textWrapper3Style} className="text-wrapper-3">
                    {/* Your component content here */}
                  </div>
                </div>
                <div style={textWrapper4Style} className="text-wrapper-4">
                  {/* Your component content here */}
                </div>
                {/* Repeat for other elements */}
              </div>
            </div>
          </div>
        );
      };
      
      // Repeat the pattern for other components
      
    
    return (
        <div className="course-description">
            <div className="overlap">
                <div className="frame">
                    <div className="title">
                        <div className="text-wrapper">CIS 1100</div>
                        <div className="div">Introduction to Computer Programming</div>
                    </div>
                    <div className="course-stats">
                        <div className="frame-2">
                            <div className="text-wrapper-2">Difficulty</div>
                            <div className="frame-wrapper">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-3">3.1</div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-2">
                            <div className="text-wrapper-2">Workload</div>
                            <div className="frame-wrapper">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-3">2.7</div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-2">
                            <div className="text-wrapper-2">Avg. Grade</div>
                            <div className="frame-wrapper">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-3">B+</div>
                                </div>
                            </div>
                        </div>
                        <div className="frame-2">
                            <div className="text-wrapper-2">Prof. Rating</div>
                            <div className="frame-wrapper">
                                <div className="div-wrapper">
                                    <div className="text-wrapper-3">3.0</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="element-information">
                        <div className="frame-3">
                            <div className="descriptors">
                                <div className="text-wrapper-4">Enrolled</div>
                                <div className="harry-smith">54/100</div>
                            </div>
                            <div className="descriptors">
                                <div className="text-wrapper-4">Offered In</div>
                                <div className="harry-smith">Fall &amp; Spring</div>
                            </div>
                            <div className="descriptors">
                                <div className="text-wrapper-4">Credits</div>
                                <div className="harry-smith">3</div>
                            </div>
                        </div>
                        <div className="frame-3">
                            <div className="descriptors">
                                <div className="text-wrapper-4">Professor</div>
                                <div className="text-wrapper-5">Harry Smith</div>
                            </div>
                            <div className="descriptors">
                                <div className="text-wrapper-4">Syllabus</div>
                                <p className="p">
                                    <span className="span">FA23</span>
                                    <span className="text-wrapper-6">, </span>
                                    <span className="span">SP22</span>
                                </p>
                            </div>
                            <div className="descriptors">
                                <div className="text-wrapper-4">Website</div>
                                <a
                                    className="text-wrapper-5"
                                    href="https://www.cis.upenn.edu/~cis110/current/"
                                    rel="noopener noreferrer"
                                    target="_blank"
                                >
                                    cis1100.com
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="description">
                        <div className="text-wrapper-7">Description</div>
                        <p className="text-wrapper-8">
                            Introduction to Computer Programming is the first course in our series introducing students to computer
                            science. In this class you will learn the fundamentals of computer programming in Java, with emphasis on
                            applications in science and engineering. You will also learn about the broader field of computer science
                            and algorithmic thinking, the fundamental approach that computer scientists take to solving problems.
                        </p>
                    </div>
                    <div className="prereqs">
                        <div className="text-wrapper-7">Prerequisites</div>
                        <p className="text-wrapper-8">
                            Introduction to Computer Programming is the first course in our series introducing students to computer
                            science. In this class you will learn.
                        </p>
                    </div>
                    <div className="lectures">
                        <div className="frame-4">
                            <div className="text-wrapper-9">Class Time</div>
                            <div className="text-wrapper-10">Section</div>
                            <div className="text-wrapper-11">Location</div>
                        </div>
                        <div className="text-wrapper-12">Lectures</div>
                        <div className="frame-5">
                            <div className="frame-6">
                                <div className="div-2">
                                    <img className="check-square" alt="Check square" src="image.svg" />
                                    <div className="frame-7">
                                        <div className="MWF-PM">MWF 12:00-12:59 PM</div>
                                        <div className="text-wrapper-13">001</div>
                                        <div className="text-wrapper-14">McNeil 103</div>
                                    </div>
                                </div>
                            </div>
                            <div className="div-2">
                                <div className="check-square">
                                    <div className="rectangle" />
                                </div>
                                <div className="frame-7">
                                    <div className="MWF-PM">MWF 12:00-12:59 PM</div>
                                    <div className="text-wrapper-13">001</div>
                                    <div className="text-wrapper-14">McNeil 103</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="recitations">
                        <div className="text-wrapper-12">Recitations</div>
                        <div className="frame-8">
                            <div className="frame-6">
                                <div className="div-2">
                                    <img className="check-square" alt="Check square" src="check-square.svg" />
                                    <div className="frame-7">
                                        <div className="MWF-PM">MWF 12:00-12:59 PM</div>
                                        <div className="text-wrapper-13">001</div>
                                        <div className="text-wrapper-14">McNeil 103</div>
                                    </div>
                                </div>
                            </div>
                            <div className="div-2">
                                <div className="check-square">
                                    <div className="rectangle" />
                                </div>
                                <div className="frame-7">
                                    <div className="MWF-PM">MWF 12:00-12:59 PM</div>
                                    <div className="text-wrapper-13">001</div>
                                    <div className="text-wrapper-14">McNeil 103</div>
                                </div>
                            </div>
                            <div className="div-2">
                                <div className="check-square">
                                    <div className="rectangle" />
                                </div>
                                <div className="frame-7">
                                    <div className="MWF-PM">MWF 12:00-12:59 PM</div>
                                    <div className="text-wrapper-13">001</div>
                                    <div className="text-wrapper-14">McNeil 103</div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="request-permission">
                        <div className="text-wrapper-7">Request Permission</div>
                        <div className="overlap-group">
                            <div className="frame-9">
                                <p className="text-wrapper-15">Explain why you want to enroll in this class.</p>
                            </div>
                            <div className="frame-9">
                                <p className="text-wrapper-15">Explain why you want to enroll in this class.</p>
                            </div>
                        </div>
                    </div>
                    <div className="spacer">
                        <div className="overlap-2">
                            <div className="frame-10">
                                <p className="text-wrapper-16">Explain why you want to enroll in this class.</p>
                            </div>
                            <div className="frame-10">
                                <p className="text-wrapper-16">Explain why you want to enroll in this class.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};


export default CourseDescription;

