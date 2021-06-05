const defaultPayload = {
    vulnerabilities: [],
    name: "New Payload",
    description: "It's a new Payload",
    content: "import android.content.Context;\n\nclass RuntimeClass {\n\tpublic RuntimeClass() {}\n\n\tpublic String run(Context context) {\n\t\treturn \"Something\";\n}",
    resultType: ""
}

export default defaultPayload;
