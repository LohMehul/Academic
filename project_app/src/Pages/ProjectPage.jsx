// import React from 'react';
import React, { useState } from "react";

const ProjectPage = () => {
    const ReadMore = ({ children }) => {
        const text = children;
        const [isReadMore, setIsReadMore] = useState(true);
        const toggleReadMore = () => {
          setIsReadMore(!isReadMore);
        };
        return (
          <p className="text">
            {isReadMore ? text.slice(0,500) : text}
            <span onClick={toggleReadMore} className="read-or-hide">
              {isReadMore ? "...read more" : " show less"}
            </span>
          </p>
        );
      };
    return (
        <div>
            <h1>this is project page</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Facilis quia esse eligendi saepe tempora quis nam temporibus repellat soluta obcaecati?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione voluptate a earum corporis numquam doloribus inventore beatae, eos facere est placeat corrupti quis ad maiores facilis aspernatur, ex quia? Ad.</p>

            <h2>Project title</h2>
            <p>project discription</p>
            <p><ReadMore>Lorem ipsum dolor sit amet consectetur adipisicing elit. Provident facilis aut, est corrupti quae ratione illo unde, deserunt dignissimos placeat perspiciatis quisquam pariatur expedita illum recusandae voluptates quo eum dolor, rerum nesciunt esse. Aut, excepturi enim repellat fuga qui, modi reiciendis esse vitae illo possimus dicta amet at suscipit provident! Ad placeat repellat ut optio error? Officiis pariatur adipisci cumque blanditiis atque id, aut unde autem? Tenetur accusamus minus deleniti consectetur facilis dolore perspiciatis soluta, delectus ratione expedita fuga voluptate nulla enim, libero quod magni quidem ducimus animi quae nostrum voluptatem! Ipsa, ea ad quae voluptatem dolor porro. Explicabo atque sit illum veniam ea optio. Illum ab consequatur rem libero rerum est fugit quo, illo accusamus vel perferendis aspernatur blanditiis? Ipsum fugit doloremque voluptas blanditiis eos voluptatem assumenda quam quis dolorum? Culpa, ex perferendis distinctio at excepturi vero iusto sunt dolorem adipisci nulla aspernatur, numquam voluptatibus, a architecto dicta sint. Illum, expedita! Necessitatibus ut architecto esse velit, eum maxime dolores explicabo aspernatur consequuntur impedit! Voluptatem a consequuntur praesentium tenetur earum rerum fugit. Quis, quidem? Fugit magnam quidem perspiciatis nulla sit ipsa possimus in dicta nostrum, vel officia natus eum non fugiat rem optio laborum atque aliquam earum voluptate tenetur qui? Voluptatum, tempore natus, architecto, cum molestias officiis ullam porro assumenda perferendis doloribus atque esse facilis iste. Quasi perferendis quae quaerat ad ipsam distinctio. Omnis vero et beatae molestias adipisci, soluta illum iure eaque dolorem, repellendus minus perferendis aperiam tempore deleniti iste possimus veniam ipsam ex nihil quos, placeat incidunt aspernatur.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut illum laborum, inventore quod provident, repellendus ex dolor aliquam labore, dolorem error obcaecati atque fugiat rem. Fugiat, dolorem voluptas. Sunt ex non aspernatur possimus hic dignissimos velit excepturi sed cumque necessitatibus, saepe fugit voluptate optio voluptatem debitis, tenetur nemo esse recusandae.</ReadMore></p>
        </div>
    );
};

export default ProjectPage;