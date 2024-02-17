import { Collapse } from "antd";
import { useState } from "react";
import { BookPropsType, SectionPropsType, TreeNode } from "../types";
import { transformSectionsToTree } from "../utils";
const { Panel } = Collapse;

const Section= ({ title, subsections }) => {
    const [expanded, setExpanded] = useState(true);

    const toggleExpanded = () => {
        setExpanded(!expanded);
    };

    return (
        <Collapse bordered={false} defaultActiveKey={['0']}>
            <Panel header={title} key="0" onClick={toggleExpanded}>
                {expanded && (
                    <div style={{ marginLeft: '20px' }}>
                        {subsections?.map((subsection, index) => (
                            <Section key={index} {...subsection} />
                        ))}
                    </div>
                )}
            </Panel>
        </Collapse>
    );
};



const Sections = ({ subsections }) => {
    const treeData= transformSectionsToTree(subsections);

    const renderTreeNodes = (nodes) => {
        return nodes.map(node => (
            <Panel header={node.label} key={node.key}>
                {node.children && renderTreeNodes(node.children)}
            </Panel>
        ));
    };

    return (
        <Collapse bordered={false} defaultActiveKey={['0']}>
            {renderTreeNodes(treeData)}
        </Collapse>
    );
};

export default Sections