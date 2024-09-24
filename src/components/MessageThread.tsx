interface MessageProps {
    message: string;
    firstMessage: boolean
    lastMessage: boolean
    alignment: string
}

const Message: React.FC<MessageProps> = ({ message, firstMessage, lastMessage, alignment }) => {
    const borderRadius = {
        borderRadius: 8,
        borderBottomRightRadius: firstMessage && !lastMessage ? 0 : 8,
        borderTopRightRadius: lastMessage && !firstMessage ? 0 : 8,
    }

    return (
        <div
            style={{
                backgroundColor: alignment === "right" ? "#74C2FF" : "#D8D8D8",
                marginTop: 5,
                padding: "10px 15px",
                ...borderRadius,
            }}
        >
            {message}
        </div>
    );
};

interface MessageBlockProps {
    messages: string[];
    avatar?: string;
    alignment?: string;
}

const Avatar: React.FC<{ avatar: string }> = ({ avatar }) => {
    return (
        <>
            <img
                src={avatar}
                alt="Avatar picture"
                style={{
                    width: 50,
                    height: 50,
                    margin: 10,
                    borderRadius: "50%",
                    border: "1px solid #ccc",
                }}
            />

        </>
    )
};

const dummyMessageBlocks = [
    {
        messages: ["Hello!", "I just completed my first 10k run this morning, and I feel amazing! It was a bit of a struggle towards the end, but pushing through the last kilometer was so rewarding. Now, I'm enjoying a big breakfast to refuel. If anyone wants to join me for a run next week, let me know!"],
        avatar: "src/assets/avatar1.png",
        alignment: "right",
    },
    {
        messages: ["I'm planning a weekend getaway to the mountains and can't wait to disconnect from the hustle and bustle of city life. I've booked a cozy cabin with a fireplace, and I'm looking forward to some hiking, stargazing, and simply enjoying the peace and quiet."
            , "What about you?"],
        avatar: "src/assets/avatar2.png",
        alignment: "left",
    },
    {
        messages: ["Enjoy, I will be in codingMode 🏋🏼‍♂️!!!"],
        avatar: "src/assets/avatar1.png",
        alignment: "right",
    },
];

const MessageBlock: React.FC<MessageBlockProps> = ({
    messages,
    avatar,
    alignment,
}) => {
    return (
        <div
            style={{
                display: "flex",
                flexDirection: alignment === "right" ? "row-reverse" : "row",
                margin: alignment === "right" ? 5 : 8
            }}
        >
            <Avatar avatar={avatar!} />
            <div>
                {messages.map((message, index) => (
                    <Message
                        key={index}
                        message={message}
                        firstMessage={index === 0}
                        lastMessage={index === messages.length - 1}
                        alignment={alignment!}

                    />
                ))}
            </div>
        </div>
    );
};

const MessageThread: React.FC<{ messageBlocks: typeof dummyMessageBlocks }> = ({ messageBlocks }) => {
    return (
        <div className="md:container md:mx-auto object-center px-5 py-5 m-10">
            <div className="text-6xl mb-10">
                <h1>Message Thread</h1>
            </div>
            <div style={{
                maxWidth: 600,
                width: "100%",
                margin: "0 auto",
                padding: "0 10px"
            }}
            >
                {messageBlocks.map(({ messages, avatar, alignment }) => {
                    return (
                        <MessageBlock
                            messages={messages}
                            avatar={avatar}
                            alignment={alignment}
                        />
                    );
                })}
            </div>
        </div>

    );
};

const App: React.FC = () => {
    return (
        <>
            <MessageThread messageBlocks={dummyMessageBlocks} />
        </>
    );
}

export default App